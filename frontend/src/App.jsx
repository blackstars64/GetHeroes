import { useLocalStorage, useSessionStorage } from "usehooks-ts";
import { Link, Outlet } from "react-router-dom";

import "./App.css";

import { useMemo } from "react";
import Token from "./components/token/Token";
import BoutonPlay from "./components/bouton_play/BoutonPlay";
import Footer from "./components/footer/Footer";
import Titre from "./components/titre/Titre";
import Newnav from "./components/menu_burger/Newnav";
import TokenContext from "./contexts/TokenContext";
import HeroesCollect from "./contexts/HeroesCollect";

function App() {
  const [token, setToken] = useLocalStorage("token", 0);
  const [afficher, setAfficher] = useSessionStorage("BoutonPlay", true);
  const [heroesCollected, setHeroesCollected] = useLocalStorage("Héros Id", []);
  const theToken = useMemo(() => ({ token, setToken }), [token]);
  const theHeroes = useMemo(
    () => ({ heroesCollected, setHeroesCollected }),
    [heroesCollected]
  );

  const afficherOui = () => {
    setAfficher(true);
  };
  const afficherNon = () => {
    setAfficher(false);
  };

  return (
    <TokenContext.Provider value={theToken}>
      <HeroesCollect.Provider value={theHeroes}>
        <div className="App">
          <header>
            <Token />
            <Newnav afficherOui={afficherOui} afficherNon={afficherNon} />
          </header>
          <main>
            <Titre />
            <Link to="/jeux" onClick={afficherNon}>
              {afficher === true ? (
                <BoutonPlay />
              ) : (
                <div className="Nothing"> </div>
              )}
            </Link>
            <Outlet />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </HeroesCollect.Provider>
    </TokenContext.Provider>
  );
}

export default App;
