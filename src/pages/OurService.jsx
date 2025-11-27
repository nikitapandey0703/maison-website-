import React from 'react'
import PageHeader from '../components/PageHeader';
import { Check } from "lucide-react";

const OurService = () => {

 const listItems = [
   "Li Europan lingues es membres del",
   "Sam familie separat existentie",
   "Un myth. scientie, musica, sport etc",
   "Litot Europa usa li sam vocabul",
   "Lingues differe lingues sit",
 ];

 const clientLogos = [
   {
     img: "https://maison.qodeinteractive.com/wp-content/uploads/2017/03/h3-client-1.png",
     hover:
       "https://maison.qodeinteractive.com/wp-content/uploads/2017/03/h3-client-1h.png",
   },
   {
     img: "https://maison.qodeinteractive.com/wp-content/uploads/2017/03/h3-client-2.png",
     hover:
       "https://maison.qodeinteractive.com/wp-content/uploads/2017/03/h3-client-2h.png",
   },
 ];
 const images = [
   { src: "/gallary-1.jpg" },
   { src: "/gallary-2.jpg" },
   { src: "/gallary-3.jpg" },
   { src: "/gallary-4.jpg" },
 ];

  return (
    <div>

      <PageHeader
        title="OUR SERVICES"
        discription="These are some services provided by us"
      />
      <section className="flex items-center justify-center px-6 py-16">
        <div className="max-w-4xl text-center">
          <h3 className="text-2xl sm:text-4xl uppercase font-extrabold">Other Amazing Features</h3>

          <p className="text-gray-600 text-base sm:text-lg leading-8 mt-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>
      </section>

      <section className="w-full bg-white flex items-center justify-center p-6">
        {/* Bento Grid */}
        <div className="max-w-5xl w-full">
          {/* Desktop & Tablet: Custom Bento Grid */}
          <div
            className="hidden sm:grid gap-6"
            style={{
              gridTemplateColumns: "repeat(6, 1fr)",
              gridTemplateRows: "repeat(3, 160px)"
            }}
          >
            {/* Large cell */}
            <div
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500"
              style={{ gridColumn: "1/4", gridRow: "1/3" }}
            >
              <img
                src={images[0]?.src}
                alt="bento-1"
                className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110config -g"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </div>
            {/* Top-right small cell */}
            <div
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500"
              style={{ gridColumn: "4/7", gridRow: "1/2" }}
            >
              <img
                src={images[1 % images.length].src}
                alt="bento-2"
                className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110config -g"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </div>
            {/* Middle-right cell */}
            <div
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500"
              style={{ gridColumn: "4/6", gridRow: "2/3" }}
            >
              <img
                src={images[2 % images.length].src}
                alt="bento-3"
                className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110config -g"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </div>
            {/* Tall right-most cell */}
            <div
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500"
              style={{ gridColumn: "6/7", gridRow: "2/4" }}
            >
              <img
                src={images[3 % images.length].src}
                alt="bento-4"
                className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110config -g"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </div>
            {/* Bottom-left cell */}
            <div
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500"
              style={{ gridColumn: "1/3", gridRow: "3/4" }}
            >
              <img
                src={images[0 % images.length].src}
                alt="bento-5"
                className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110config -g"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </div>
            {/* Bottom-middle cell */}
            <div
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500"
              style={{ gridColumn: "3/6", gridRow: "3/4" }}
            >
              <img
                src={images[1 % images.length].src}
                alt="bento-6"
                className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110config -g"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </div>
          </div>
          {/* Mobile: Show images one below another */}
          <div className="flex flex-col gap-4 sm:hidden w-full">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={images[idx % images.length].src}
                  alt={`bento-mobile-${idx + 1}`}
                  className="w-full h-40 object-cover transform transition-all duration-700 group-hover:scale-110config -g"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* COLUMN 1 */}
          <div>
            <h5 className="text-2xl font-semibold leading-snug">
              At vero et essent eam everti qui et iusto tale
            </h5>

            <p className="text-base sm:text-lg leading-[27px] text-gray-600 mt-6">
              Sed ut perspiciatis unde omnis iste natus error sit totam
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore.
            </p>

            <div className="mt-6 space-y-3">
              {listItems.map((text, i) => (
                <div key={i} className="flex items-start">
                  <Check size={15} className="text-black mt-1" />
                  <p className="text-base sm:text-lg text-gray-700 ml-4">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 2 (same content) */}
          <div>
            <h5 className="text-2xl font-semibold leading-snug">
              At vero et essent eam everti qui et iusto tale
            </h5>

            <p className="text-base sm:text-lg leading-[27px] text-gray-600 mt-6">
              Sed ut perspiciatis unde omnis iste natus error sit totam
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore.
            </p>

            <div className="mt-6 space-y-3">
              {listItems.map((text, i) => (
                <div key={i} className="flex items-start">
                  <Check size={15} className="text-black mt-1" />
                  <p className="text-base sm:text-lg text-gray-700 ml-4">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h5 className="text-2xl font-semibold leading-snug">
              At vero et essent eam everti qui et iusto tale
            </h5>

            <p className="text-base sm:text-lg leading-[27px] text-gray-600 mt-6">
              Sed ut perspiciatis unde omnis iste natus error sit totam
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore.
            </p>

            <p className="text-base sm:text-lg text-gray-800 mt-4">
              Veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem:
            </p>

            {/* CLIENT LOGOS */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {clientLogos.map((logo, i) => (
                <div key={i} className="group flex justify-center">
                  <img
                    src={logo.img}
                    className="w-28 transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={logo.hover}
                    className="w-28 absolute opacity-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurService