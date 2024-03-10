import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/HomeScreen/Home";
import Navbar from "./Pages/Home/Navbar";
import PortfolioDetail from "./Pages/Home/PortfolioDetail";
import Footer from "./Pages/Home/Footer";

function App() {
  return (
    <>
      <BrowserRouter className="">
        <div>
            <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/" element={<Navbar />}></Route>
            <Route exact path="/details/:id" element={<PortfolioDetail />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
