import React from "react";

import img2 from "../../../assets/img7.jpeg"
const Hero = () => {
  return (
    <div>
      <div className="container px-4">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={img2}
              className="d-block mx-lg-auto img-fluid w-full rounded-3xl"
              alt="image loading"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Focus on Education and Extracurricular Activities
            </h1>
            <p className="font-medium text-xs sm:text-sm md:text-base lg:text-xl mt-4">
            The primary goal of ICCHE is to offer quality education and a nurturing environment where children can grow academically and socially. In addition to teaching subjects like Math, Science, and English, ICCHE conducts workshops, creative sessions, and interactive activities to enhance learning. These extracurricular activities encourage creativity, problem-solving, and teamwork among students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
