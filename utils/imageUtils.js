import { buildImageUrl } from "cloudinary-build-url";

const cloudinaryUrl = ({ imgPath, width, height, radius }) => {
  let radiusDimensions = "";
  if (radius === 1) {
    radiusDimensions = "20:20:40:40";
  } else if (radius === 2) {
    radiusDimensions = "50:50:50:50";
  }
  return buildImageUrl(imgPath, {
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME,
    },
    transformations: {
      resize: {
        type: width || height ? "scale" : "",
        width,
        height,
      },
      radius: radiusDimensions,
      // dpr: "auto",
    },
  });
};

const getImageName = (url) => {
  if (!url) return null;
  const arr = url.split("/");
  if (arr.length === 0) return url;
  return arr[arr.length - 1];
};

export { getImageName, cloudinaryUrl };
