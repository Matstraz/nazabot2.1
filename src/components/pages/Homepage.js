import { Snake } from "@json2d/react-snake-lib";
import { css } from "aphrodite";
import { useState } from "react";
import styles from "../utils/Animations";

export default function Homepage() {
  let [score, setScore] = useState(-1);
  let [show, setShow] = useState(true);

  function reachTen() {
    score <= 8 ? setScore(score + 1) : setShow(false);
  }

  return (
    <div className="bg-slate-800 relative h-screen w-screen flex flex-col justify-center items-center gap-8">
      <div
        className={
          show ? `top-5 left-5 text-6xl text-white text-center` : `hidden`
        }
      >
        {score}
      </div>
      <div
        className={
          show
            ? `h-96 w-full md:h-full h md:w-2/5 lg:h-4/5 h lg:w-2/5`
            : `hidden`
        }
      >
        <Snake
          initialSnake={[
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 2, y: 2 },
            { x: 2, y: 3 },
            { x: 2, y: 4 },
          ]}
          onScoreChange={reachTen}
          onGameOver={() => setScore(-1)}
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
      <div className={show ? `hidden` : `text-6xl text-white text-center`}>
        <p className={`${css(styles.slideInDown)}`}>WELCOME TO</p>{" "}
        <p className={`${css(styles.slideInUp)} font-bold`}>NAZABOT 2.1</p>
      </div>
    </div>
  );
}
