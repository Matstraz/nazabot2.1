import { Snake } from "@json2d/react-snake-lib";
import { useState } from "react";
import WelcomePage from "./WelcomePage";
import noblock from "../../assets/pics/homepage/noblock.png";

export default function Homepage() {
  let [score, setScore] = useState(-1);
  let [show, setShow] = useState(true);
  let [show2, setShow2] = useState(false);

  function reachTen() {
    score <= 8 ? setScore(score + 1) : setShow(false);
  }

  function gameOver() {
    setScore(-1);
    setShow2(true);
  }

  return (
    <div className="bg-slate-800 relative h-screen w-screen flex flex-col justify-center items-center gap-8 md:gap-2 lg:gap-3">
      <div
        className={
          show
            ? `top-5 left-5 text-6xl md:text-4xl lg:text-6xl text-white text-center flex justify-center items-center w-full md:w-2/5 lg:w-2/5`
            : `hidden`
        }
      >
        <div
          className={
            !show2 ? "flex justify-center items-center w-1/2" : "hidden"
          }
        >
          {score}
        </div>
        <div
          className={
            show2 ? "flex justify-center items-center w-1/2" : "hidden"
          }
        >
          <img
            src={noblock}
            alt="noblock"
            className="w-6/12 md:w-4/12 lg:w-3/12"
          />
        </div>
        <div className="w-1/2">
          <fieldset class="border border-solid border-slate-300 py-1 w-11/12">
            <legend class="text-base font-bold">High scores</legend>
            <p className="text-sm text-orange-400">1st Naza . . . . . . . 10</p>
            <p className="text-sm text-cyan-300">2nd Girex . . . . . . . 9</p>
            <p className="text-sm text-cyan-300">3rd Peco . . . . . . . . 1 </p>
          </fieldset>
        </div>
      </div>
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
      <WelcomePage show={show} />
    </div>
  );
}
