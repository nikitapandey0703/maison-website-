import React from "react";
// import { Icon1, Icon2, Icon3 } from "your-icon-library"; // ← You can import icons here

const InfoSection = () => {
  const infoData = [
    {
      title: "DARK AND LIGHT",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cu sociis natoque penatibus et magnis.",
      // icon: <Icon1 className="w-10 h-10 text-gray-600" />, // ← Replace later
    },
    {
      title: "FULLY RESPONSIVE",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cu sociis natoque penatibus et magnis.",
      // icon: <Icon2 className="w-10 h-10 text-gray-600" />, // ← Replace later
    },
    {
      title: "500+ UI COMPONENTS",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cu sociis natoque penatibus et magnis.",
      // icon: <Icon3 className="w-10 h-10 text-gray-600" />, // ← Replace later
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {infoData.map((item, index) => (
          <div key={index} className="space-y-4">
            {/* Placeholder for icon/image */}
            <div className="flex justify-center md:justify-start">
              <div className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center text-gray-500">
                {/* {item.icon} */}
                {/* Replace this with <img src={yourImage} alt="icon" /> */}
                IMG
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold tracking-wide text-gray-800">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>

            {/* Read More Link */}
            <a
              href="#"
              className="text-sm font-semibold tracking-wide text-gray-800 hover:text-black inline-flex items-center gap-2 transition-all duration-300"
            >
              READ MORE →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
