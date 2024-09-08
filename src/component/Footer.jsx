import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="bg-Navbar-color py-14">
        <div className="container row-tw justify-between text-white">
          <div className="text-center w-full md:w-1/3">
            <h1 className="text-3xl font-bold my-5">LOCATION</h1>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="text-center w-full md:w-1/3">
            <h1 className="text-3xl font-bold my-5">AROUND THE WEB</h1>
            <div className="flex items-center justify-center">
              <div className="icon-circle p-2 me-2 w-9 flex justify-center items-center border-2 border-white rounded-full">
                <i class="fa-brands fa-facebook"></i>
              </div>
              <div className="icon-circle p-2 me-2 w-9 flex justify-center items-center border-2 border-white rounded-full">
                <i class="fa-brands fa-twitter"></i>
              </div>
              <div className="icon-circle p-2 me-2 w-9 flex justify-center items-center border-2 border-white rounded-full">
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="icon-circle p-2 me-2 w-9 flex justify-center items-center border-2 border-white rounded-full">
                <i class="fa-solid fa-globe"></i>
              </div>
            </div>
          </div>
          <div className="text-center w-full md:w-1/3">
            <h1 className="text-3xl font-bold my-5">ABOUT FREELANCER</h1>
            <p>Freelance is a free to use, licensed Bootstrap</p>
            <p>theme created by Route</p>
          </div>
        </div>
      </div>
      <div className="text-center py-6 bg-footer-color text-white">
        <p>Copyright © Your Website 2021</p>
      </div>
    </div>
  );
}
