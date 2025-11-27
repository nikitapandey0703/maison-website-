import React from 'react'

const PageHeader = (props) => {

  return (

    <>
      <section
        className="relative w-full h-[50vh] bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage:
            "url('./hero-img-1.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-6">
            <h4 className="text-3xl md:text-4xl font-semibold text-white tracking-wide">
            {props.title}
            </h4>

            <p className="text-gray-200 mt-2 text-base md:text-lg">
            {props.discription}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageHeader