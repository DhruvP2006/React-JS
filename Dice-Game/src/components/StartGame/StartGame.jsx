import styled from "styled-components";

const Button = styled.div`
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  gap: 10px;
  color: #fff;
  min-width: 220px;
  border: none;
`;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
`;

const StartGame = () => {
  return (
    <Container>
      <div>
        <img src="public\images\dices 1.png" />
      </div>
      <div>
        <h1>DICE GAME</h1>
        <Button>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
