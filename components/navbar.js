import React from "react";
import Image from 'next/image'

function Navbar() {
  return (
  <nav className="mx-auto flex items-center justify-around space-x-56 pt-8">
    <Image
      src="/logo-header.png"
      height={75}
      width={75}
      alt="logo-header"
      loading="lazy"
    />
    <div className="flex items-center gap-8">
      <a
        href=""
        className="text-lg text-gray-600 hover:underline hover:text-orange-600"
      >
        Study
      </a>
      <a
        href=""
        className="text-lg text-gray-600 hover:underline hover:text-orange-600"
      >
        About us
      </a>
      <a
        href=""
        className="text-lg text-gray-600 hover:underline hover:text-orange-600"
      >
        Admissions
      </a>
      <a
        href=""
        className="text-lg text-gray-600 hover:underline hover:text-orange-600"
      >
        Pages
      </a>
      <a
        href=""
        className="text-lg text-gray-600 hover:underline hover:text-orange-600"
      >
        News
      </a>
      <a
        href=""
        className="text-lg text-gray-600 hover:underline hover:text-orange-600"
      >
        Contact
      </a>

      <a
        href=""
        className="bg-white shadow-md rounded-full px-4 py-2 hover:bg-orange-600 hover:text-white text-orange-600"
      >
        Apply Now
      </a>
    </div>
  </nav>
  );
}

export default Navbar;
