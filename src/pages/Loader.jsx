import React ,{ useEffect, useState } from "react";

const Loader = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // start fade out animation
      setTimeout(onFinish, 600); // wait for fade-out to end
    }, 2000); // loader duration

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`flex items-center justify-center h-screen w-full 
        bg-[rgb(245,245,245)] fixed top-0 left-0 z-50 
        transition-opacity duration-700 
        ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      {/* Animated CSS */}
      <style>
        {`
          @keyframes cubeFlip {
            0% { transform: rotateX(0deg) rotateY(0deg); }
            25% { transform: rotateX(180deg); }
            50% { transform: rotateX(180deg) rotateY(180deg); }
            75% { transform: rotateX(360deg) rotateY(180deg); }
            100% { transform: rotateX(360deg) rotateY(360deg); }
          }

          @keyframes glowPulse {
            0%, 100% { box-shadow: 0 0 10px rgba(0,0,0,0.2); }
            50% { box-shadow: 0 0 20px rgba(0,0,0,0.35); }
          }
        `}
      </style>

      {/* Loader Cube */}
      <div
        className="
          w-10 h-10 sm:w-16 sm:h-16 md:w-14 md:h-14
          bg-[rgb(24,24,24)] rounded-md
        "
        style={{
          animation:
            "cubeFlip 1.7s linear infinite, glowPulse 1.5s ease-in-out infinite",
          transformStyle: "preserve-3d",
        }}
      ></div>
    </div>
  );
};

export default Loader;
