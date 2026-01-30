import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-full overflow-hidden aspect-[square] bg-amber-100">
            <Image
              width={600}
                height={750}
                alt="Susan Mwarabu"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              src="/me.webp"
            />
          </div>
          <div>
            
              <p className="font-medium text-gray-900">HELLO, MEET</p>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-gray-900 mb-6 ">
              Susan Mwarabu.
            </h1>
            <p className="text-xl md:text-2xl text-amber-600 font-heading font-medium mb-8 ">
              Youth Mentor | Youth Pastor | Criminology &amp; IT Graduate
            </p>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10 text-gray-700">
              Deeply committed to Christ-centered service, integrity, and
              creating safe, nurturing environments where children and youth can
              grow, thrive, and reach their full potential.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-gray-700">
              <a
                href="mailto:susanmwarabu@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <i className="ri-mail-line text-lg"></i>
                <span className="text-sm">susanmwarabu@gmail.com</span>
              </a>
              <a
                href="tel:+254743553238"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <i className="ri-phone-line text-lg"></i>
                <span className="text-sm">+254 743 553 238</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
