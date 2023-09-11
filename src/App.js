import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";

import Home from "./pages/Homepage";
import About from "./pages/Aboutpage";
import Services from "./pages/Servicespage";
import ExtraSales from "./pages/ExtraSalespage";
import NotFoundPage from "./pages/NotFoundpage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/extrasales" element={<ExtraSales />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
