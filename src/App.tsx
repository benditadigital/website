/* Custom Components */
import Navbar from "./components/shared/Navbar";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";

/* React Router */
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import ExpressWebsite from "./pages/ExpressWebsite";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio-sites" element={<Portfolio />} />
          <Route path="/sites/expresso" element={<ExpressWebsite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
