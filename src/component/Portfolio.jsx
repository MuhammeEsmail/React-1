import React, { useState } from "react";
import img1 from "../assets/poert1.png";
import img2 from "../assets/port2.png";
import img3 from "../assets/port3.png";
export default function Portfolio() {
  return (
    <div className="container text-center">
      <h1 className="text-5xl font-bold text-Navbar-color my-7">
        PORTFOLIO COMPONENT
      </h1>
      <div className="my-3 portfolio-icon-box relative">
        <i className="portfolio-icon text-Navbar-color text-3xl fa-solid fa-star relative bg-transparent mx-4"></i>
      </div>
      <div className="row-tw text-white py-4">
        <div className="w-full md:w-1/3 rounded p-5 relative">
          <img src={img1} alt="img" className="portfolio-img rounded-md" />
          <div className="absolute flex opacity-0 cursor-pointer transition duration-700 hover:opacity-100 top-5 start-5 end-5 bottom-5 bg-overlay text-white justify-center items-center z-50 rounded">
            <i className="fa-3x fa-solid fa-plus" />
          </div>
        </div>
        <div className="w-full md:w-1/3 rounded p-5 relative">
          <img src={img2} alt="img" className="portfolio-img rounded-md" />
          <div className="absolute flex opacity-0 cursor-pointer transition duration-700 hover:opacity-100 top-5 start-5 end-5 bottom-5 bg-overlay text-white justify-center items-center z-50 rounded">
            <i className="fa-3x fa-solid fa-plus" />
          </div>
        </div>
        <div className="w-full md:w-1/3 rounded p-5 relative">
          <img src={img3} alt="img" className="portfolio-img rounded-md" />
          <div className="absolute flex opacity-0 cursor-pointer transition duration-700 hover:opacity-100 top-5 start-5 end-5 bottom-5 bg-overlay text-white justify-center items-center z-50 rounded">
            <i className="fa-3x fa-solid fa-plus" />
          </div>
        </div>
        <div className="w-full md:w-1/3 rounded p-5 relative">
          <img src={img1} alt="img" className="portfolio-img rounded-md" />
          <div className="absolute flex opacity-0 cursor-pointer transition duration-700 hover:opacity-100 top-5 start-5 end-5 bottom-5 bg-overlay text-white justify-center items-center z-50 rounded">
            <i className="fa-3x fa-solid fa-plus" />
          </div>
        </div>
        <div className="w-full md:w-1/3 rounded p-5 relative">
          <img src={img2} alt="img" className="portfolio-img rounded-md" />
          <div className="absolute flex opacity-0 cursor-pointer transition duration-700 hover:opacity-100 top-5 start-5 end-5 bottom-5 bg-overlay text-white justify-center items-center z-50 rounded">
            <i className="fa-3x fa-solid fa-plus" />
          </div>
        </div>
        <div className="w-full md:w-1/3 rounded p-5 relative">
          <img src={img3} alt="img" className="portfolio-img rounded-md" />
          <div className="absolute flex opacity-0 cursor-pointer transition duration-700 hover:opacity-100 top-5 start-5 end-5 bottom-5 bg-overlay text-white justify-center items-center z-50 rounded">
            <i className="fa-3x fa-solid fa-plus" />
          </div>
        </div>
      </div>
    </div>
  );
}
