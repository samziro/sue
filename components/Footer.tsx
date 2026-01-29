import React from "react";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="px-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-4">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          
          <p className="text-gray-700 text-xs">
            © 2026 Susan Mwarabu. All rights reserved.
          </p>
        </div>
        <div className="text-xs">
          Designed by <a href="https://samuel-ziro.vercel.app" className="text-amber-600 hover:underline font-semibold">techforgenode</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
