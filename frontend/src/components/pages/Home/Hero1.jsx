import React from "react";
import image2 from "../../../assets/3907.jpg"

const Hero = () => {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={image2}
              className="d-block mx-lg-auto img-fluid rounded-3xl"
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
            <p className="lead">
            The primary goal of ICCHE is to offer quality education and a nurturing environment where children can grow academically and socially. In addition to teaching subjects like Math, Science, and English, ICCHE conducts workshops, creative sessions, and interactive activities to enhance learning. These extracurricular activities encourage creativity, problem-solving, and teamwork among students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
