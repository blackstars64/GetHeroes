import { useEffect, useState } from "react";
import "./App.css";
import Token from "./components/token/Token";
import BoutonPlay from "./components/bouton_play/BoutonPlay";
import Footer from "./components/footer/Footer";
import Titre from "./components/titre/Titre";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(+localStorage.getItem("token") || 0);

  useEffect(() => {
    localStorage.setItem("token", token.toString());
  }, [token]);

  return (
    <div className="App">
      <header>
        <Token token={token} />
      </header>
      <main>
        <Titre />
        <BoutonPlay />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
