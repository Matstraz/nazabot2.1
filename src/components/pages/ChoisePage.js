import { useNavigate } from "react-router";

export default function ChoisePage({
  show,
  setShow,
  sleeping1,
  setSleeping1,
  pokemon1,
  setPokemon1,
  bear1,
  setBear1,
  hurted1,
  setHurted1,
  honest1,
  setHonest1,
  ninja1,
  setNinja1,
  ninjabig1,
  setNinjabig1,
  ugly1,
  setUgly1,
}) {
  const navigate = useNavigate();
  return (
    <div
      className={ugly1 ? "bg-red-800" : hurted1 ? "bg-yellow-300" : "hidden"}
      onClick={() => {
        setShow(false);
        navigate("/");
      }}
    >
      asdasd
    </div>
  );
}
