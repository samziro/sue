import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* <!-- Image Section --> */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-amber-100">
              <Image
                width={600}
                height={750}
                alt="Susan Mwarabu"
                loading="lazy"
                className="w-full h-full object-cover object-center"
                src="/3.jpeg"
              />
            </div>
          </div>

          {/* <!-- Text Section --> */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="text-gray-900">About</span>
              <br />
              <span className="text-amber-600">Me</span>
            </h2>

            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                My calling is to serve children and youth through mentorship,
                discipleship, and faith-based leadership. My academic background
                in Criminology and Information Technology, combined with
                hands-on experience in church and community programs, equips me
                to support holistic child development initiatives.
              </p>
              <p className="text-base md:text-lg">
                I believe in nurturing the spiritual, social, emotional, and
                physical growth of young people while upholding strong child
                protection standards, accountability, and compassion in all
                areas of service.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-lg font-semibold text-gray-900">
                — In Service of Christ
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <div className="w-3 h-3 rounded-full bg-amber-600"></div>
              <div className="w-3 h-3 rounded-full border-2 border-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
