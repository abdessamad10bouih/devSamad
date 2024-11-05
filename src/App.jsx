import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Borders from "./home/Borders";
import { Toaster } from "react-hot-toast";
import ColorPallete from "./home/ColorPallete";
import GradientGenerator from "./home/GradientGenerator";
import ContactMe from "./home/ContactMe";
import FilterGenerator from "./home/FilterGenerator";
import Error from "./home/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/border-generator" element={<Borders />} />
          <Route path="/palette" element={<ColorPallete />} />
          <Route path="/tailwind-gradient" element={<GradientGenerator />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/filter" element={<FilterGenerator />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
