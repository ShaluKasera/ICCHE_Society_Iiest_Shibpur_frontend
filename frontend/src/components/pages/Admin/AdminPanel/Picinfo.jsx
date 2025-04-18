import React from 'react';
import Layout from "../../../layout/Layout";
import img1 from "../../../../assets/pic.png";

const Picinfo = () => {
  return (
    <Layout>
      <div className="w-[800px] h-[500px] bg-gray-800 shadow-2xl rounded-2xl overflow-hidden mx-auto flex flex-col">
        {/* Title */}
        <div className="bg-gray-900 text-white text-center py-3 px-6 text-xl font-semibold">
          Faculty In-Charge (ICCHE)
        </div>

        <div className="flex flex-grow">
          {/* Left side - Image */}
          <div className="w-1/2 bg-gray-700 flex items-center justify-center">
            <img
              className="w-60 h-60 rounded-full object-cover"
              src={img1}
              alt="Dr. Vineet Srivastava"
            />
          </div>

          {/* Right side - Details */}
          <div className="w-1/2 flex flex-col justify-center px-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Dr. Vineet Srivastava</h2>
            <p className="text-xl text-blue-400 font-semibold mb-1">
              Email: vineet@hss.iiests.ac.in
            </p>
            <p className="text-xl text-blue-400 font-semibold mb-4">
              Department: Humanities and Social Sciences
            </p>

            <p className="text-base mb-3">
              Assistant Professor at <strong>IIEST, Shibpur</strong>, teaching <strong>Economics</strong> to both Undergraduate and Postgraduate students.
            </p>

          
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Picinfo;
