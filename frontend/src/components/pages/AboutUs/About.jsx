import React from "react";
import Layout from "../../layout/Layout";
import img1 from "../../../assets/slater.jpeg";
import img2 from "../../../assets/img14.jpeg";
import img3 from "../../../assets/img8.jpeg";
import img4 from "../../../assets/img10.jpeg";
import img5 from "../../../assets/img9.jpeg";
import img6 from "../../../assets/img12.jpeg";
import img7 from "../../../assets/img11.jpeg";
import img8 from "../../../assets/img13.jpeg";

const About = () => {
  return (
    <Layout>
      <div >
        <div className="relative w-full">
          <img src={img1} className="opacity-40 h-3/6 w-full" alt="image" />
          <div className="absolute inset-0 bg-black/50 text-white flex items-center justify-center">
            <div className="w-[90%] max-w-4xl text-center">
              <p className="text-md sm:text-xl md:text-2xl lg:text-5xl font-extrabold leading-tight">
                ICCHE: Empowering Underprivileged Children Through Education
              </p>
              <p className="font-medium text-xs sm:text-sm md:text-base lg:text-xl mt-4">
                ICCHE a student's outstretch programme, an initiative by center
                of studies in science,technology and culture started by students
                of IIEST Shibpur in 2016 as an evening school under the
                Department ofHumanities and Social Sciences. Since, 2016 it is
                providing supportive environment forunderprivileged children
              </p>
            </div>
          </div>
        </div>

        <div className="ms-3 lg:ms-5">
          <div className="container  px-4 py-4">
            <div className="row flex-lg-row-reverse align-items-center g-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img
                  src={img2}
                  className="d-block mx-lg-auto img-fluid rounded-3xl"
                  alt="image loading"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6 ">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3"></h1>
                <p className="text-xs md:text-lg lg:text-xl">
                  ICCHE supports underprivileged children from 1st to 10th grade
                  with education in subjects like Math, Science, and English,
                  taught by students from all years. Regular attendance is
                  maintained, and students are seated by grade level. We also
                  offer computer classes and conduct monthly tests to ensure
                  continuous evaluation. Our focus is on the overall development
                  of students, helping them achieve academic and personal
                  growth. A proud achievement was when a student, Rahul Kumar,
                  was selected for ITI last year. Each class ends with a joyful
                  cake distribution for refreshment and celebration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-3 lg:ms-5">
          <div className="container  px-4  py-4">
            <div className="row flex-lg-row-reverse align-items-center g-5 ">
              <div className="col-lg-6">
                <h1 className="display-5  fw-bold text-body-emphasis lh-1 mb-3">
                  Sports Day
                </h1>
                <p className="text-xs md:text-lg lg:text-xl">
                  ICCHE organizes Sports Day to promote both mental and physical
                  development among students. The event includes various
                  competitions where students compete within their age groups,
                  ensuring fair play and excitement. Popular games include
                  running races, spoon races, bucketball, biscuit races, and
                  many more engaging activities. Sports Day encourages
                  discipline, and a spirit of healthy competition among
                  students. Winners are awarded prizes, recognizing their
                  efforts and boosting their confidence. The event fosters joy,
                  enthusiasm, and overall well-being, making it a memorable
                  experience for all participants.
                </p>
              </div>
              <div className="col-10 col-sm-8 col-lg-6">
                <img
                  src={img3}
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

        <div className="ms-3 lg:ms-5">
          <div className="container  px-4 py-4">
            <div className="row flex-lg-row-reverse align-items-center g-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img
                  src={img4}
                  className="d-block mx-lg-auto img-fluid rounded-3xl"
                  alt="image loading"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                  Drawing Competition
                </h1>
                <p className="text-xs md:text-lg lg:text-xl">
                  ICCHE organizes a Drawing Competition to encourage creativity
                  and artistic expression among students. This event provides a
                  platform for children to showcase their imagination through
                  colors and sketches. Students are grouped by age, ensuring a
                  fair and engaging competition. Various themes are given,
                  allowing them to explore different ideas and improve their
                  artistic skills. The best artworks are awarded prizes,
                  motivating students to develop their talent further. This
                  competition not only enhances creativity but also builds
                  confidence and a sense of achievement among participants.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-3 lg:ms-5">
          <div className="container  px-4  py-4">
            <div className="row flex-lg-row-reverse align-items-center g-5 ">
              <div className="col-lg-6">
                <h1 className="display-5  fw-bold text-body-emphasis lh-1 mb-3">
                  Origami Competition
                </h1>
                <p className="text-xs md:text-lg lg:text-xl">
                  ICCHE organizes an Origami Competition to foster creativity,
                  patience, and fine motor skills among students. This event
                  allows children to explore the art of paper folding,
                  transforming simple sheets into beautiful shapes and designs.
                  This event brings joy and a sense of accomplishment to all
                  participants.
                </p>
              </div>
              <div className="col-10 col-sm-8 col-lg-6">
                <img
                  src={img5}
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

        <div className="ms-3 lg:ms-5">
          <div className="container  px-4 py-4">
            <div className="row flex-lg-row-reverse align-items-center g-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img
                  src={img6}
                  className="d-block mx-lg-auto img-fluid rounded-3xl"
                  alt="image loading"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                  Clothing donation drive
                </h1>
                <p className="text-xs md:text-lg lg:text-xl">
                  ICCHE organizes clothing donation drives to support students
                  in need by providing them with essential clothing. We collect
                  donated clothes and distribute them to underprivileged
                  children, ensuring they have proper attire for different
                  seasons. This initiative helps improve their comfort,
                  confidence, and overall well-being. Through this effort, we
                  aim to spread kindness and create a sense of community among
                  students. Our goal is to ensure that no child faces
                  difficulties due to a lack of clothing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-3 lg:ms-5">
          <div className="container  px-4  py-4">
            <div className="row flex-lg-row-reverse align-items-center g-5 ">
              <div className="col-lg-6">
                <h1 className="display-5  fw-bold text-body-emphasis lh-1 mb-3">
                  Festive Celebrations & Patriotism
                </h1>
                <p className="text-xs md:text-lg lg:text-xl">
                  ICCHE celebrates festivals and national events with
                  students to foster joy, unity, and cultural awareness. We
                  organize special programs for Holi, Raksha Bandhan,
                  Independence Day, and Republic Day, where students actively
                  participate in various activities. During Holi, children enjoy
                  playing with organic colors, symbolizing happiness and
                  togetherness. On Raksha Bandhan, they exchange handmade
                  rakhis, promoting love and bonding. Independence Day and
                  Republic Day are marked with flag hoisting, patriotic songs,
                  and speeches, instilling a sense of national pride. These
                  celebrations create a joyful learning environment and help
                  students appreciate traditions and values.
                </p>
              </div>
              <div className="col-10 col-sm-8 col-lg-6">
                <img
                  src={img7}
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



        <div className="ms-3 lg:ms-5">
          <div className="container  px-4 py-4">
            <div className="row flex-lg-row-reverse align-items-center g-5">
            <div className="col-10 col-sm-8 col-lg-6">
                <img
                  src={img8}
                  className="d-block mx-lg-auto img-fluid rounded-3xl"
                  alt="image loading"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                The Pillars of ICCHE
                </h1>
                <p className="text-xs md:text-lg lg:text-xl">
                ICCHE is driven by the dedication of volunteers, who are college students from various academic years. These passionate individuals not only teach subjects like Math, Science, and English but also guide students in developing good manners, discipline, and social values. Volunteers play a crucial role in shaping the future of underprivileged children by providing them with knowledge, mentorship, and emotional support. Their selfless efforts help create a nurturing learning environment where every child feels valued and encouraged to grow. These volunteers are the true pillars of our society, working tirelessly to bring positive change and empower the next generation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
