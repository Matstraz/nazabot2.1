import { Route, Routes } from "react-router";
import Homepage from "./components/pages/homepage/Homepage";
import ChoisePage from "./components/pages/ChoisePage";
import { useState } from "react";

function App() {
  let [sleeping1, setSleeping1] = useState(false);
  let [pokemon1, setPokemon1] = useState(false);
  let [bear1, setBear1] = useState(false);
  let [hurted1, setHurted1] = useState(false);
  let [honest1, setHonest1] = useState(false);
  let [ninja1, setNinja1] = useState(false);
  let [ninjabig1, setNinjabig1] = useState(false);
  let [ugly1, setUgly1] = useState(false);

  let [show, setShow] = useState(true);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Homepage
            setSleeping1={setSleeping1}
            setPokemon1={setPokemon1}
            setBear1={setBear1}
            setHurted1={setHurted1}
            setHonest1={setHonest1}
            setNinja1={setNinja1}
            setNinjabig1={setNinjabig1}
            setUgly1={setUgly1}
            show={show}
            setShow={setShow}
          />
        }
      />
      <Route
        path="/choise"
        element={
          <ChoisePage
            sleeping1={sleeping1}
            setSleeping1={setSleeping1}
            pokemon1={pokemon1}
            setPokemon1={setPokemon1}
            bear1={bear1}
            setBear1={setBear1}
            hurted1={hurted1}
            setHurted1={setHurted1}
            honest1={honest1}
            setHonest1={setHonest1}
            ninja1={ninja1}
            setNinja1={setNinja1}
            ninjabig1={ninjabig1}
            setNinjabig1={setNinjabig1}
            ugly1={ugly1}
            setUgly1={setUgly1}
            setShow={setShow}
          />
        }
      />

      {/*      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
