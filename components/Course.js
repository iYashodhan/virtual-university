import React from "react";
import Image from "next/image";

function Course({ imagePath, title, type, description }) {
  description = "keep reading...";
  return (
    <div className="w-[263px]">
      <Image src={imagePath} alt={title} width={263} height={163} />
      <a href="" className="text-lg text-gray-600 hover:text-orange-600 hover:underline">
        {title}
      </a>
      <p className="text-sm font-thin text-gray-600">{type}</p>
      <p className="text-md text-gray-600 mt-2">{description}</p>
    </div>
  );
}

export default Course;
