import { useState } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import BasicDetail from "./components/BasicDetail";
import Loader from "./pages/Loader";

import Home from "./pages/Home";
import About from "./pages/About";
import OurService from "./pages/OurService";
import ContactPage from "./pages/ContactPage";
import TestimonialPages from "./pages/TestimonialPages";

function App() {
  const [loading, setLoading] = useState(true);
  const [showHomeAnimation, setShowHomeAnimation] = useState(false);

  const location = useLocation(); // 🔥 Important to detect the current route

  // Loader finished → trigger home animation
  const handleLoaderFinish = () => {
    setLoading(false);
    setShowHomeAnimation(true);

    setTimeout(() => {
      setShowHomeAnimation(false);
    }, 1500); // home intro animation duration
  };

  // Check if current page is home
  const isHome = location.pathname === "/";

  return (
    <>
      {/* 1️⃣ Loader */}
      {loading && <Loader onFinish={handleLoaderFinish} />}

      {/* 2️⃣ Home animation (no navbar/basicDetail here) */}
      {!loading && showHomeAnimation && (
        <div className="page-enter">
          <Home />
        </div>
      )}

      {/* 3️⃣ Full Website */}
      {!loading && !showHomeAnimation && (
        <>
          {/* ⭐ BasicDetail only on HOME page */}
          {isHome && <BasicDetail />}

          {/* ⭐ Navbar always visible after loader */}
          <NavBar />

          {/* Website Pages */}
          <div className="overflow-hidden pt-16">
            {/* pt-16 ensures page content does not sit under navbar */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/our-services" element={<OurService />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/testimonial" element={<TestimonialPages />} />
            </Routes>

            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;
