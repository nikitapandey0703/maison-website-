import React from 'react'
// Swiper core & required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles (required)
import "swiper/css";
import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import AnimatedCircularCounters from '../components/AnimatedCircularCounters ';
import PageHeader from '../components/PageHeader';



const TestimonialPages = () => {

  const testimonials = [
    {
      img: "https://maison.qodeinteractive.com/wp-content/uploads/2017/04/h9-team-2.png",
      text: "Mea omnes petentium iudicabit ad, eius platonem id pri. Ridens concludaturque te cum.",
      author: "Jerrold Britton",
    },
    {
      img: "https://maison.qodeinteractive.com/wp-content/uploads/2017/04/h9-team-1.png",
      text: "Diam nostro adolescens ei mei, sit ei debet partem appareat ponderum.",
      author: "Peyton Candice",
    },
    {
      img: "https://maison.qodeinteractive.com/wp-content/uploads/2017/04/h9-team-3.png",
      text: "Ridens concludaturque te cum, diam nostro adolescens ei mei.",
      author: "Cearra Laurena",
    },
  ];
  return (
    <div>
      <PageHeader title={"Testimonials"} discription={"We always design for you"} />

      <section className="w-full py-24 bg-white flex flex-col items-center">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-black text-2xl sm:text-4xl uppercase font-extrabold tracking-widest ">
            Testimonials
          </h2>
          <p className="text-gray-500">Testimonials</p>
        </div>

        {/* Slider */}
        <div className="w-full max-w-2xl px-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            loop={true}
            speed={600}
            slidesPerView={1}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center space-y-6">
                  <img
                    src={t.img}
                    className="w-[130px] h-[130px] rounded-full object-cover shadow-md"
                    alt={t.author}
                  />

                  <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
                    {t.text}
                  </p>

                  <h4 className="text-lg font-semibold text-gray-800 pb-10">
                    {t.author}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="w-full min-h-dvh bg-[#f6f6f6] flex items-center py-20">
        <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="
             opacity-0 animate-fadeUp
             bg-white backdrop-blur-md 
             p-10 rounded-xl 
             shadow-[0_15px_40px_rgba(0,0,0,0.1)] 
             hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
             hover:-translate-y-2 hover:scale-[1.02]
             transition-all duration-500 
           "
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {/* Image */}
              <img
                src={item.img}
                alt="person"
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />

              {/* Text */}
              <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
                {item.text}
              </p>

              {/* Author */}
              <h3 className="text-black font-semibold tracking-wider text-[13px]">
                {item.author}
              </h3>
            </div>
          ))}
        </div>

        {/* Fade Up Animation */}
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
      <AnimatedCircularCounters />
    </div>
  );
}

export default TestimonialPages