/* Custom Components */
import Navbar from "./components/shared/Navbar";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";

/* React Router */
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import ExpressWebsite from "./pages/ExpressWebsite";
import ComplexWebsite from "./pages/ComplexWebsite";

/* Recoil */
import { RecoilRoot, atom, useRecoilState } from "recoil";
import { useEffect } from "react";

export const isNavbarOpen = atom({
  key: "isNavbarOpen",
  default: false,
});

export const currentPath = atom({
  key: "currentPath",
  default: "/",
});

function App() {
  return (
    <div className="App font-poppins">
      <RecoilRoot>
        <BrowserRouter>
          <Navbar />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio-sites" element={<Portfolio />} />
            <Route path="/sites/expresso" element={<ExpressWebsite />} />
            <Route path="/sites/complexo" element={<ComplexWebsite />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
