import { cloudinaryUrl } from "../utils/imageUtils";

const CloudinaryImage = ({ _id, title, imgPath, lazyLoading, openModal }) => {
  // const imgName = getImageName(imgPath);
  return (
    <img
      loading={lazyLoading ? "lazy" : "eager"}
      alt={`alt-${title}`}
      src={cloudinaryUrl({ imgPath, width: 700 })}
      srcSet={`
      ${cloudinaryUrl({ imgPath, width: 700 })} 767w,
      ${cloudinaryUrl({ imgPath, width: 435, radius: 1 })} 991w,
      ${cloudinaryUrl({ imgPath, width: 360, radius: 2 })} 1200w,
              `}
      // sizes={`(min-width:768px)50vw,(min-width:992px)33vw,100vw`}
      // src={imgPath}
      className={`img`}
      onClick={() => openModal(_id)}
    />
  );
};

export default CloudinaryImage;
