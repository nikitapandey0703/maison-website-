import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react"; // ✅ React Icons
import PageHeader from "../components/PageHeader";

export default function ContactPage() {
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = {};
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name) formErrors.name = "The field is required.";
    if (!email) formErrors.email = "The field is required.";
    if (!message) formErrors.message = "The field is required.";

    setErrors(formErrors);
    setAlert(Object.keys(formErrors).length > 0);
  };

  const data = [
    {
      icon: <MapPin size={42} strokeWidth={1.2} />,
      title: "Our Address",
      text: "8500 Beverly Boulevard CA 90048",
    },
    {
      icon: <Mail size={42} strokeWidth={1.2} />,
      title: "Our Email",
      text: "maison@qodeinteractive.com",
    },
    {
      icon: <Phone size={42} strokeWidth={1.2} />,
      title: "Call Us",
      text: "Phone: +88 (0) 12 345 67 00",
    },
  ];

  return (
    <div className="w-full">
      <PageHeader title="CONTACT US" discription="This is the Contact Page." />

      {/* ======================
          FEATURES SECTION
      ======================= */}
      <section className="flex items-center justify-center px-6 py-16">
        <div className="max-w-4xl text-center">
          <h3 className="text-black text-2xl sm:text-4xl uppercase font-extrabold tracking-widest ">Other Amazing Features</h3>

          <p className="text-gray-600 text-base sm:text-lg leading-8 mt-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>
      </section>

      {/* ======================
          ICON CARDS SECTION
      ======================= */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {data.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg transition bg-white"
            >
              {/* ICON */}
              <div className="text-black">{item.icon}</div>

              {/* CONTENT */}
              <h6 className="text-xl text-center font-semibold mt-6">
                {item.title}
              </h6>
              <p className="text-gray-600 text-center mt-2 leading-6">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ======================
          MAP & FORM
      ======================= */}
      <section className="min-h-dvh px-6 py-20 bg-[#f8f8f8] flex items-center">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12">
          {/* LEFT – MAP */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide mb-6">
              WHO WE ARE?
            </h2>

            <iframe
              title="Maison Map"
              src="https://maps.google.com/maps?q=manhattan,%20new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[350px] rounded-md shadow-sm"
            ></iframe>
          </div>

          {/* RIGHT – FORM */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide mb-6">
              LEAVE A COMMENT
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Message Box */}
              <div>
                <textarea
                  name="message"
                  placeholder="Send Message"
                  rows="7"
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 tracking-wider hover:bg-neutral-800 duration-200"
              >
                SEND MESSAGE
              </button>
            </form>

            {alert && (
              <p className="mt-6 border border-yellow-400 bg-yellow-50 px-4 py-3 text-yellow-700">
                One or more fields have an error. Please check and try again.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
