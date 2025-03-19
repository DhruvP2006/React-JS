import styled from "styled-components";

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 10px 18px;
  background-color: #000;
  border-radius: 5px;
  min-width: 200px;
  border: none;
  font-size: 1.6rem;
  border: 1px solid transparent;
  transition: all 300ms ease-in;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    border: 1px solid #000;
    color: #000;
  }
`;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="public\images\dices 1.png" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
