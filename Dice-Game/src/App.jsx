import StartGame from "./components/StartGame/StartGame.jsx";
import styled from "styled-components";
import { useState } from "react";
import GamePlay from "./components/GamePlay.jsx";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <div>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </div>
  );
}

export default App;
