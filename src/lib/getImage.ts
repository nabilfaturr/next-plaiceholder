import { getPlaiceholder } from "plaiceholder";
import fs from "fs/promises";
import path from "path";

export const getRemoteImage = async (src: string) => {
  // fetch gambar dari external resource, then gambar akan di convert jadi buffer
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  // invoke getPlaiceholder untuk meng-generate placeholder dari buffer gambar yang telah di fetch sebelum nya. size 10 means hasil nya akan jadi 10 x 10 pixel.
  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 32 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};

export const getLocalImage = async (src: string) => {
  const publicPath = path.join(process.cwd(), "public");
  const buffer = await fs.readFile(path.join(publicPath, src));
  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 16 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};