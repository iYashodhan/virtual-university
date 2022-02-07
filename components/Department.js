import React from 'react';
import Image from 'next/image';

function Department({ imagePath, title, backgroundColor }) {
  return <div className={`${backgroundColor} w-fit p-6 hover:shadow-lg shadow-md`}>
      <Image src={imagePath} alt={title} height={274} width={274} loading="lazy" />
      <p className="text-white text-center text-3xl">{title}</p>
  </div>;
}

export default Department;
