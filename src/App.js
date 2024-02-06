import { Route, Routes } from "react-router";
import Homepage from "./components/pages/homepage/Homepage";
import ChoisePage from "./components/pages/ChoisePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/choise" element={<ChoisePage />} />

      {/*      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
