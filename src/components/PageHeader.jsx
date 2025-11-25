import React from 'react'

const PageHeader = (props) => {

  return (
    <div className="bg-[url(./hero-img-1.jpg)] flex justify-center items-center text-center h-[70vh]">
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-wide">
          {props.title}
        </h1>
        <p className=" text-gray-200 mt-2 text-base md:text-lg">
          {props.discription}
        </p>
      </div>
    </div>
  );
}

export default PageHeader