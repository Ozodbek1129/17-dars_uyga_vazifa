import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./components/info";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="info" element={<Info />} />
      </Routes>
    </>
  );
}
