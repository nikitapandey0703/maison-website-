import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Loader from "./pages/Loader";

function App() {
  return (
    <>
    <Loader/>
      <div className="absolute z-10 w-full top-0">
             <NavBar />
           </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
