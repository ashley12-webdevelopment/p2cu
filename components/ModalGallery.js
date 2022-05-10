import styles from "../styles/ModalGallery.module.css";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { cloudinaryUrl } from "../utils/imageUtils";

const ModalGallery = ({ galleryArray, selectedIndex, closeModal }) => {
  //   Find the image _id retrieve the index number from there, better would be to pass the index straight away
  const [selection, setSelection] = useState(() => {
    return galleryArray.findIndex((item) => item._id === selectedIndex);
  });

  // console.log(selectedIndex);
  // console.log(galleryArray);
  // console.log(selection);

  const selectPrev = () => {
    setSelection((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
    });
  };

  const selectNext = () => {
    setSelection((prev) => {
      if (prev < galleryArray.length) {
        return prev + 1;
      }
    });
  };
  return (
    <section className={styles["modal-gallery-overlay"]}>
      <button
        type="button"
        className={`btn ${styles["btn-close"]}`}
        onClick={closeModal}
      >
        <FaTimes />
      </button>
      <div className={styles["modal-content"]}>
        <button
          type="button"
          className={`btn ${styles["btn-nav"]} ${styles["btn-prev"]}`}
          onClick={selectPrev}
          disabled={selection <= 0 ? true : false}
        >
          <FaChevronLeft />
        </button>
        <button
          type="button"
          className={`btn ${styles["btn-nav"]} ${styles["btn-next"]}`}
          onClick={selectNext}
          disabled={selection >= galleryArray.length - 1 ? true : false}
        >
          <FaChevronRight />
        </button>
        <img
          className={`img ${styles["modal-gallery-img"]}`}
          src={cloudinaryUrl({
            imgPath: galleryArray[selection].imgPath,
            height: 560,
          })}
          srcSet={`
            ${cloudinaryUrl({
              imgPath: galleryArray[selection].imgPath,
              height: 400,
            })} 767w,
            ${cloudinaryUrl({
              imgPath: galleryArray[selection].imgPath,
              height: 600,
            })} 1200w,
          `}
          alt={galleryArray[selection].title}
        />
      </div>
    </section>
  );
};

export default ModalGallery;
