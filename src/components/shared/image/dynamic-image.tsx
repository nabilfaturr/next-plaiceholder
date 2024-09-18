import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { getLocalImage } from "@/lib/getImage";

type DynamicImageProps = {
  containerClass?: string;
  imageClass?: string;
  src: string;
  alt: string;
};

const DynamicImage = async ({
  containerClass,
  imageClass,
  src,
  alt,
}: DynamicImageProps) => {
  const { img, base64 } = await getLocalImage(src);
  return (
    <div className={cn("relative", containerClass)}>
      <Image
        {...img}
        blurDataURL={base64}
        placeholder="blur"
        alt={alt}
        className={cn("object-center", imageClass)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default DynamicImage;
