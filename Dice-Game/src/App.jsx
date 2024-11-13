import StartGame from "./components/StartGame/startGame";
import styled from "styled-components";

const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px;
`;
function App() {
  return (
    <div>
      <StartGame />
    </div>
  );
}

export default App;
