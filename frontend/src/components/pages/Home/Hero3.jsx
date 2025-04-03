import React from "react";
import image from "../../../assets/img5.jpeg";

const Hero3 = () => {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={image}
              className="d-block mx-lg-auto img-fluid rounded-3xl"
              alt="image loading"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Role of Volunteers in ICCHE
            </h1>
            <p className="lead">
              The backbone of ICCHE is its dedicated volunteers, who are
              students from IIEST Shibpur. These volunteers take on the role of
              teachers, mentors, and guides, helping children with their studies
              while also instilling good behavior and social values. Their
              commitment and selfless efforts play a crucial role in shaping the
              future of these children, making ICCHE a strong pillar of hope and
              transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
