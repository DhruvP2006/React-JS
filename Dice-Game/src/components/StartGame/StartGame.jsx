import styled from "styled-components";

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
`;

const Container = styled.div`
  max-width: 1180px;
`;

const StartGame = () => {
  return (
    <Container>
      <img src="public\images\dices 1.png" />
      <div>
        <h1>DICE GAME</h1>
        <Button>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
