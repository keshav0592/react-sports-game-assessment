import logo from "./logo.svg";
import "./App.css";

import Game from "./components/game/Game";
import barca from "./images/barca.jpg";
import columbus from "./images/columbus.bmp";
import madrid from "./images/madrid.png";
import maimi from "./images/maimi.bmp";

function App(props) {
  const fcBarcelona = {
    name: "FC Barcelona",
    logoSrc: barca,
  };

  const columbusCrew = {
    name: "Columbus Crew",
    logoSrc: columbus,
  };

  const realMadrid = {
    name: "Real Madrid",
    logoSrc: madrid,
  };

  const interMaimi = {
    name: "Inter-Maimi",
    logoSrc: maimi,
  };

  return (
    <div className="App">
      <Game venue="Maimi Arena" homeTeam={columbusCrew} visitingTeam={interMaimi} />
      <Game venue="Camp Nou" homeTeam={fcBarcelona} visitingTeam={realMadrid} />
    </div>
  );
}

export default App;
