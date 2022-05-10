import { cloudinaryUrl } from "../utils/imageUtils";

const Logo = ({ width, height }) => {
  const imgPath =
    "https://res.cloudinary.com/degpymlnj/image/upload/v1652069858/P2CU/logo.png";

  return <img alt="P2CU" src={cloudinaryUrl({ imgPath, width, height })} />;
};

export default Logo;
