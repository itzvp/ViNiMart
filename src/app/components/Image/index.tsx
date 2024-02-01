import type { FC } from "react";
import type { ImageProps } from "next/image";
import NextImage from "next/image";

const Image: FC<ImageProps> = (props) => {
  return (
    <NextImage
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      {...props}
    />
  );
};

export default Image;
