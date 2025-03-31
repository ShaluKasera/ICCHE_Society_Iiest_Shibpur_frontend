import React from "react";
import image1 from "../../../assets/high-angle-group-smiley-childrens.jpg";
const Hero2 = () => {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Engaging Activities and Learning Programs
            </h1>
            <p className="lead">
            ICCHE regularly organizes workshops and fun events to make learning engaging for students. Activities like origami workshops, drawing competitions, and sports events help children develop new skills while enjoying the learning process. These programs not only boost their confidence but also teach them important values such as discipline, teamwork, and perseverance.
            </p>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={image1}
              className="d-block mx-lg-auto img-fluid rounded-3xl"
              alt="image loading"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
