import React from "react";
import Image from "next/image";

const RoundedImage = ({ src, alt, className = "" }) => {
  return (
    <div
      className={`rounded-[10px] border-4 border-secondary overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={300}
        height={300}
        objectFit="cover"
      />
    </div>
  );
};

export default RoundedImage;
