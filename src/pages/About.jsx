import React from "react";
import PageHeader from "../components/PageHeader";
import InfoSection from "../components/about/InfoSection";
const team = [
  {
    name: "MARLENE PIERCE",
    role: "Project Lead",
    img: "https://maison.qodeinteractive.com/wp-content/uploads/2017/03/team-img-3.jpg",
  },
  {
    name: "LINNET WATT",
    role: "Group Coordinator",
    img: "https://maison.qodeinteractive.com/wp-content/uploads/2017/03/team-img-4.jpg",
  },
  {
    name: "ELIOTT CORWIN",
    role: "Mobility Engineer",
    img: "https://maison.qodeinteractive.com/wp-content/uploads/2017/03/team-img-5.jpg",
  },
];

const awards = [
  "https://maison.qodeinteractive.com/wp-content/uploads/2017/03/h6-client-1.png",
  "https://maison.qodeinteractive.com/wp-content/uploads/2017/03/h6-client-2.png",
  "https://maison.qodeinteractive.com/wp-content/uploads/2017/03/h6-client-3.png",
  "https://maison.qodeinteractive.com/wp-content/uploads/2017/03/h6-client-4.png",
  "https://maison.qodeinteractive.com/wp-content/uploads/2017/03/h6-client-8.png",
  "https://maison.qodeinteractive.com/wp-content/uploads/2017/03/h6-client-9.png",
];
const About = () => {
  return (
    <>

      <PageHeader title={"ABOUT US"} discription={"This is the About Page."} />
      {/* <InfoSection /> */}
      <section className="w-full">
        {/* Top Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-30 max-w-6xl mx-auto text-center  md:text-left">
          {/* Feature 1 */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <img
              src="https://maison.qodeinteractive.com/wp-content/uploads/2017/04/et-icon-1.png"
              alt="Dark and Light"
              className="w-12 h-auto"
            />
            <h6 className="text-black text-2xl sm:text-4xl uppercase font-extrabold tracking-widest ">
              Dark and Light
            </h6>
            <p className="text-gray-600 text-base sm:text-lg  leading-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
            <a
              href="#"
              className="text-base sm:text-lg font-semibold tracking-wide text-gray-800 hover:text-black"
            >
              Read More →
            </a>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <img
              src="https://maison.qodeinteractive.com/wp-content/uploads/2017/04/et-icon-2.png"
              alt="Fully Responsive"
              className="w-12 h-auto"
            />
            <h6 className="text-black text-2xl sm:text-4xl uppercase font-extrabold tracking-widest  ">
              Fully Responsive
            </h6>
            <p className="text-gray-600 text-base sm:text-lg  leading-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
            <a
              href="#"
              className="text-base sm:text-lg font-semibold tracking-wide text-gray-800 hover:text-black"
            >
              Read More →
            </a>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <img
              src="https://maison.qodeinteractive.com/wp-content/uploads/2017/04/et-icon-7.png"
              alt="500+ UI Components"
              className="w-7 h-auto"
            />
            <h6 className="text-black text-2xl sm:text-4xl uppercase font-extrabold tracking-widest  ">
              500+ UI Components
            </h6>
            <p className="text-gray-600 text-base sm:text-lg  leading-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
            <a
              href="#"
              className="text-base sm:text-lg font-semibold tracking-wide text-gray-800 hover:text-black"
            >
              Read More →
            </a>
          </div>
        </div>

        {/* Awards + Video */}
        <div className="bg-gray-100 py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Awards */}
            <div className="space-y-12">
              <div className="flex items-center space-x-6 border-l-2 pl-6 border-gray-300">
                <img
                  src="https://maison.qodeinteractive.com/wp-content/uploads/2017/03/h6-client-5.png"
                  alt="Award"
                  className="w-32 h-auto"
                />
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing el, sed do
                  eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>

              <div className="flex items-center space-x-6 border-l-2 pl-6 border-gray-300">
                <img
                  src="https://maison.qodeinteractive.com/wp-content/uploads/2017/03/h6-client-6.png"
                  alt="Award"
                  className="w-32 h-auto"
                />
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing el, sed do
                  eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>

              <div className="flex items-center space-x-6 border-l-2 pl-6 border-gray-300">
                <img
                  src="https://maison.qodeinteractive.com/wp-content/uploads/2017/03/h6-client-7.png"
                  alt="Award"
                  className="w-32 h-auto"
                />
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing el, sed do
                  eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            {/* Video Section */}
            <div className="relative">
              <img
                src="https://maison.qodeinteractive.com/wp-content/uploads/2017/03/h6-img-2.jpg"
                alt="Award Ceremony"
                className="w-full rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-500"
              />
              <a
                href="https://vimeo.com/99091504"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-lg hover:scale-105 transition-transform"
              >
                {/* <Play size={24} className="text-gray-700" /> */}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full">
        {/* Section Header */}
        <div className="text-center py-10 text-black max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-wide uppercase mb-4">
            Other Amazing Features
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>

        {/* Team Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-0 mb-16">
          {/* Member 1 */}
          <div className="text-center">
            <div className=" group">
              <img
                src="https://maison.qodeinteractive.com/wp-content/uploads/2017/04/p8-team-1.jpg"
                alt="MARLENE PIERCE"
                className="w-full rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="mt-6 text-base font-bold tracking-wider">
              MARLENE PIERCE
            </h3>
            <p className="text-gray-500 text-sm mt-1">Project Lead</p>
          </div>

          {/* Member 2 */}
          <div className="text-center">
            <div className=" group">
              <img
                src="https://maison.qodeinteractive.com/wp-content/uploads/2017/04/p8-team-2-300x202.jpg"
                alt="LINNET WATT"
                className="w-full rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="mt-6 text-base font-bold tracking-wider">
              LINNET WATT
            </h3>
            <p className="text-gray-500 text-sm mt-1">Group Coordinator</p>
          </div>

          {/* Member 3 */}
          <div className="text-center">
            <div className=" group">
              <img
                src="https://maison.qodeinteractive.com/wp-content/uploads/2017/04/p8-team-3-300x202.jpg"
                alt="ELIOTT CORWIN"
                className="w-full rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="mt-6 text-base font-bold tracking-wider">
              ELIOTT CORWIN
            </h3>
            <p className="text-gray-500 text-sm mt-1">Mobility Engineer</p>
          </div>
        </div>

        {/* Awards Section */}
        <div className="bg-gray-100 p-20 mt-20">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-10">
            <img
              src="https://maison.qodeinteractive.com/wp-content/uploads/2017/03/h6-client-1.png"
              alt="Award Logo"
              className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="https://maison.qodeinteractive.com/wp-content/uploads/2017/03/h6-client-2.png"
              alt="Award Logo"
              className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="https://maison.qodeinteractive.com/wp-content/uploads/2017/03/h6-client-3.png"
              alt="Award Logo"
              className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="https://maison.qodeinteractive.com/wp-content/uploads/2017/03/h6-client-4.png"
              alt="Award Logo"
              className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="https://maison.qodeinteractive.com/wp-content/uploads/2017/04/h8-client-5h.png"
              alt="Award Logo"
              className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="https://maison.qodeinteractive.com/wp-content/uploads/2017/04/h8-client-7h.png"
              alt="Award Logo"
              className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
