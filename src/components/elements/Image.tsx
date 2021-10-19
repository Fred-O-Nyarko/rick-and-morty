import React from "react";
// Alias Image as NextImage to prevent component name clash
import NextImage, { ImageProps } from "next/image";

type CustomImageProps = ImageProps;

function Image(props: CustomImageProps) {
  return (
    <NextImage
      {...props}
      //Image is set as unoptimized so as to not exceed the fair usage policy of vercel about image optimization.
      // https://vercel.com/docs/platform/fair-use-policy
      unoptimized
    />
  );
}

export default Image;
