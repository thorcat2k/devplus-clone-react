import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Screen/HomePage/HomePage";
import OneCampus from "./Screen/OneCampus/OneCampus";
import TwoCampus from "./Screen/TwoCampus/TwoCampus";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/one-plus-campus" element={<OneCampus />} />
      <Route path="/two-plus-campus" element={<TwoCampus />} />
    </Routes>
  );
}

export default App;
