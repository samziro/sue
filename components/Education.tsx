import React from "react";
import Title from "./Title";

const Education = () => {
  return (
    <section id="education" className="py-24 bg-amber-50">
      <div className="px-4">
        <div className="max-w-6xl mx-auto">
          <Title Heading="Education &amp; Calling" />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white shadow-md rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-6">
                <i className="ri-graduation-cap-line text-amber-600 text-xl"></i>
              </div>
              <span className="inline-block px-4 py-1 bg-amber-50 rounded-full text-sm font-medium mb-4">
                Education
              </span>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
                Bachelor of Arts
              </h3>
              <p className="text-lg text-gray-700 font-medium mb-2">
                Criminology with Information Technology
              </p>
              <p className="text-gray-700">Maseno University</p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-6">
                <i className="ri-focus-2-line text-xl text-amber-600"></i>
              </div>
              <span className="inline-block px-4 py-1 bg-amber-50 rounded-full text-sm font-medium mb-4">
                Calling &amp; Career Interest
              </span>
              <h3 className="font-heading text-xl font-bold  mb-4">
                Christ-Centered Youth Development
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                I am passionate about serving in Christ-centered child and youth
                development programs. My long-term goal is to contribute as a{" "}
                <span className=" font-medium">
                  Project Facilitator
                </span>{" "}
                or
                <span className=" font-medium">
                  {" "}
                  Program Support Officer
                </span>{" "}
                within Compassion-supported initiatives, supporting effective
                program implementation, youth empowerment, and spiritual growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
