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
          <h3 className="text-4xl font-semibold">Other Amazing Features</h3>

          <p className="text-gray-600 text-lg leading-8 font-light mt-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>
      </section>

      <section className="w-full min-h-screen bg-white flex items-center justify-center p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl w-full">
          {images.map((item, index) => (
            <div
              key={index}
              className="
              group 
              relative overflow-hidden rounded-xl 
              shadow-md hover:shadow-2xl 
              transition-all duration-500
            "
            >
              <img
                src={item.src}
                alt="grid"
                className="
                w-full h-64 object-cover
                transform transition-all duration-700 
                group-hover:scale-110 group-hover:rotate-1
              "
              />

              {/* Hover overlay */}
              <div
                className="
                absolute inset-0 bg-black/0 
                group-hover:bg-black/20 
                transition-all duration-500
              "
              ></div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f5f5] py-20 min-h-dvh px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* COLUMN 1 */}
          <div>
            <h5 className="text-xl font-semibold leading-snug">
              At vero et essent eam everti qui et iusto tale
            </h5>

            <p className="text-[14px] leading-[27px] text-gray-600 mt-6">
              Sed ut perspiciatis unde omnis iste natus error sit totam
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore.
            </p>

            <div className="mt-6 space-y-3">
              {listItems.map((text, i) => (
                <div key={i} className="flex items-start">
                  <Check size={15} className="text-black mt-1" />
                  <p className="text-[14px] text-gray-700 ml-4">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 2 (same content) */}
          <div>
            <h5 className="text-xl font-semibold leading-snug">
              At vero et essent eam everti qui et iusto tale
            </h5>

            <p className="text-[14px] leading-[27px] text-gray-600 mt-6">
              Sed ut perspiciatis unde omnis iste natus error sit totam
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore.
            </p>

            <div className="mt-6 space-y-3">
              {listItems.map((text, i) => (
                <div key={i} className="flex items-start">
                  <Check size={15} className="text-black mt-1" />
                  <p className="text-[14px] text-gray-700 ml-4">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h5 className="text-xl font-semibold leading-snug">
              At vero et essent eam everti qui et iusto tale
            </h5>

            <p className="text-[14px] leading-[27px] text-gray-600 mt-6">
              Sed ut perspiciatis unde omnis iste natus error sit totam
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore.
            </p>

            <p className="text-[14px] text-gray-800 mt-4">
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