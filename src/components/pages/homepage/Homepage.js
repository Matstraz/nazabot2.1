import { useState } from "react";
import noblock from "../../../assets/pics/homepage/noblock.png";
import SnakeGames from "./SnakeGame";
import WelcomePage from "./WelcomePage";

export default function Homepage({
  show,
  setShow,
  setSleeping1,
  setPokemon1,
  setBear1,
  setHurted1,
  setHonest1,
  setNinja1,
  setNinjabig1,
  setUgly1,
}) {
  let [score, setScore] = useState(-1);

  let [show2, setShow2] = useState(false);

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
      <SnakeGames
        score={score}
        setScore={setScore}
        show={show}
        setShow={setShow}
        setShow2={setShow2}
      />
      <WelcomePage
        show={show}
        setSleeping1={setSleeping1}
        setPokemon1={setPokemon1}
        setBear1={setBear1}
        setHurted1={setHurted1}
        setHonest1={setHonest1}
        setNinja1={setNinja1}
        setNinjabig1={setNinjabig1}
        setUgly1={setUgly1}
      />
    </div>
  );
}
