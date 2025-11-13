import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Loader from "./pages/Loader";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Pages from "./pages/Pages";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Loader duration

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // ⏳ show only loader (and nothing else)
    return <Loader />;
  }
  return (

    <>
     
      <div className="absolute z-20 w-full top-0">
        <NavBar  />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pages" element={<Pages />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
