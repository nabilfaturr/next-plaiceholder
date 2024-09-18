import React from "react";
import Image, { StaticImageData } from "next/image";

type StaticImageProps = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
};

const StaticImage = ({ src, alt, className }: StaticImageProps) => {
  return <Image src={src} alt={alt} className={className} placeholder="blur"/>;
};

export default StaticImage;
