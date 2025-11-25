import React, { useEffect, useRef, useState } from "react";

const counters = [
  { title: "Team Work", value: 46 },
  { title: "Development", value: 53 },
  { title: "Graphic Design", value: 75 },
  { title: "Our Strategy", value: 87 },
];

const AnimatedCircularCounters = () => {
  const ref = useRef();
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-[70vh] bg-[#ffffff] flex items-center justify-center py-16"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-6xl px-6">
        {counters.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center opacity-0 animate-fadeUp"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {/* Circle */}
            <div className="relative w-44 h-44">
              {/* Background track */}
              <svg
                className="absolute top-0 left-0"
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#ddd"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>

              {/* Animated progress circle */}
              <svg
                className="absolute top-0 left-0 transform -rotate-90"
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#414141"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 45}
                  strokeDashoffset={
                    start
                      ? (2 * Math.PI * 45 * (100 - item.value)) / 100
                      : 2 * Math.PI * 45
                  }
                  style={{
                    transition: "stroke-dashoffset 1.5s ease",
                  }}
                />
              </svg>

              {/* Center number */}
              <div className="absolute inset-0 flex items-center justify-center text-3xl font-semibold text-[#414141]">
                {start ? item.value : 0}
              </div>
            </div>

            {/* Title */}
            <h3 className="mt-5 text-lg font-semibold text-[#414141]">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Fade-up animation */}
      <style>
        {`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeUp {
            animation: fadeUp 0.8s ease forwards;
          }
        `}
      </style>
    </section>
  );
};

export default AnimatedCircularCounters;
