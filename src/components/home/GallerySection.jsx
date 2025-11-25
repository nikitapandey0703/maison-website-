import React from "react";

const images = [
  {
    src: "/gallary-1.jpg",
    title: "MODERN COUNTRYSIDE VILLA",
    category: "Modern / Urban",
  },
  {
    src: "/gallary-2.jpg",
    title: "THE READER’S NOOK",
    category: "Contemporary / Cozy",
  },
  {
    src: "/gallary-3.jpg",
    title: "OPEN INTERIOR SPACE",
    category: "Minimal / Modern",
  },
  {
    src: "/gallary-4.jpg",
    title: "BATHROOM DECOR",
    category: "Material / Clean",
  },
  {
    src: "/gallary-5.jpg",
    title: "MODERN SINK DESIGN",
    category: "Commercial / Material",
  },
  {
    src: "/gallary-6.jpg",
    title: "FLOWER ARRANGEMENT",
    category: "Material / Soft",
  },
  {
    src: "/gallary-7.jpg",
    title: "MINIMAL WASHROOM",
    category: "Urban / Material",
  },
  {
    src: "/gallary-8.jpg",
    title: "SCANDINAVIAN CORNER",
    category: "Urban / Modern",
  },
];

export default function GallerySection() {
  return (
    <div className="w-full">

      <section className="px-8 py-12">
        {/* Centered container */}
        <div className="w-4/5 lg:w-3/5 mx-auto">
          {/* Filter Bar */}
          <div className="flex justify-center gap-8 mb-12 text-sm font-semibold tracking-widest uppercase text-gray-600">
            {["All", "Commercial", "Material", "Museum", "Urban"].map((tab) => (
              <div
                key={tab}
                className="hover:text-black transition-colors duration-200"
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {images.map((item, index) => (
              <div key={index} className="group">
                {/* Image container */}
                <div className="overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:-translate-y-8"
                  />
                </div>

                {/* Text below image */}
                <div className="mt-4 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                  <h3 className="text-sm font-bold tracking-wide text-gray-900 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
