import styles from "../../utils/Animations";
import { css } from "aphrodite";
import sleeping from "../../../assets/pics/welcomepage/sleeping.png";
import pokemon from "../../../assets/pics/welcomepage/pokemon.png";
import bear from "../../../assets/pics/welcomepage/bear.png";
import hurted from "../../../assets/pics/welcomepage/hurted.png";
import honest from "../../../assets/pics/welcomepage/honest.png";
import ninja from "../../../assets/pics/welcomepage/ninja.png";
import ninjabig from "../../../assets/pics/welcomepage/ninjabig.png";
import ugly from "../../../assets/pics/welcomepage/ugly.png";
import { useNavigate } from "react-router";

export default function WelcomePage({
  show,
  setSleeping1,
  setPokemon1,
  setBear1,
  setHurted1,
  setHonest1,
  setNinja1,
  setNinjabig1,
  setUgly1,
}) {
  const navigate = useNavigate();
  return (
    <div
      className={
        show
          ? `hidden`
          : `text-5xl text-white text-center h-full w-full grid grid-cols-3 grid-rows-5`
      }
    >
      {/*  row 1 */}
      <div className="col-span-2 text-xl flex justify-center items-center ">
        Pick your favorite Naza
      </div>
      <div className=" flex justify-center items-center">
        <img className="w-11/12 cursor-pointer" src={ninja} alt="ninja" />
      </div>

      {/*  row 2*/}
      <div className=" flex justify-center items-center">
        <img className="w-7/12 cursor-pointer" src={bear} alt="bear" />
      </div>
      <div className=" flex justify-center items-center">
        <img className="w-11/12 cursor-pointer" src={honest} alt="honest" />
      </div>
      <div className=" flex justify-center items-center">
        <img className="w-11/12 cursor-pointer" src={pokemon} alt="pokemon" />
      </div>
      {/*  row 3 */}
      <div className="col-span-3 flex flex-col justify-center items-center">
        <p className={`${css(styles.slideInLeft)}`}>WELCOME TO</p>
        <p className={`${css(styles.slideInRight)} font-bold`}>NAZABOT 2.1</p>
      </div>
      {/*  row 4 */}
      <div className=" flex justify-center items-center">
        <img className="w-7/12 cursor-pointer" src={ninjabig} alt="ninjabig" />
      </div>
      <div className=" flex justify-center items-center">
        <img className="w-11/12 cursor-pointer" src={hurted} alt="hurted" />
      </div>
      <div className="flex justify-center items-center">
        <img className="w-11/12 cursor-pointer" src={sleeping} alt="sleeping" />
      </div>
      {/*  row 5*/}
      <div className=" flex justify-center items-center ">
        <img
          className="w-11/12 cursor-pointer"
          src={ugly}
          alt="ugly"
          onClick={() => {
            setUgly1(true);
            navigate("/choise");
          }}
        />
      </div>

      <div className="col-span-2 text-xl flex justify-center items-center">
        Pick your favorite Naza
      </div>
    </div>
  );
}
