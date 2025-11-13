import React, { useEffect, useState } from "react";
import Home from "./Home";


const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // stop showing loader after 4 seconds
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

   return (
     <div className="flex items-center justify-center h-screen bg-[rgb(245,245,245)]">
       <style>
         {`
            @keyframes flipBox {
              0% { transform: rotateY(0deg) rotateX(0deg); }
              25% { transform: rotateY(180deg); }
              50% { transform: rotateY(180deg) rotateX(180deg); }
              75% { transform: rotateY(360deg) rotateX(180deg); }
              100% { transform: rotateY(360deg) rotateX(360deg); }
            }
          `}
       </style>

       <div
         className="w-12 h-12 bg-[rgb(24,24,24)]/90 rounded-sm"
         style={{
           animation: "flipBox 2s linear",
           transformStyle: "preserve-3d",
         }}
       ></div>
     </div>
   );
    
};

export default Loader;
