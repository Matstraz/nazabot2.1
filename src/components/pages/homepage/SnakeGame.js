import { Snake } from "@json2d/react-snake-lib";

export default function SnakeGames({
  score,
  setScore,
  show,
  setShow,
  setShow2,
}) {
  function reachTen() {
    score <= 8 ? setScore(score + 1) : setShow(false);
  }

  function gameOver() {
    setScore(-1);
    setShow2(true);
  }
  return (
    <div
      className={
        show ? `h-96 w-full md:h-5/6 md:w-2/5 lg:h-4/5 h lg:w-2/5` : `hidden`
      }
    >
      <Snake
        initialSnake={[
          { x: 2, y: 0 },
          { x: 2, y: 1 },
          { x: 2, y: 2 },
          { x: 2, y: 3 },
          { x: 2, y: 4 },
          { x: 2, y: 5 },
          { x: 2, y: 6 },
        ]}
        onScoreChange={reachTen}
        onGameOver={gameOver}
        onGameStart={() => setShow2(false)}
        initialDirection="down"
        width="100%"
        height="100%"
        bgColor="silver"
        innerBorderColor="#b1b0b0"
        snakeSpeed={80}
        borderColor="black"
        snakeColor="#3e3e3e"
        snakeHeadColor="#1a1a1a"
        appleColor="tomato"
        borderRadius={0}
        snakeHeadRadius={1}
        borderWidth={0}
        shakeBoard={true}
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        size={13}
        startGameText="Start Game"
        startButtonStyle={{
          color: "white",
          padding: "6px 20px",
          backgroundColor: "#1a1a1a",
          borderRadius: "10px",
          fontSize: "17px",
          fontWeight: "600",
          cursor: "pointer",
        }}
        startButtonHoverStyle={{
          backgroundColor: "#4f4d4d",
        }}
        noWall={true}
      />
    </div>
  );
}
