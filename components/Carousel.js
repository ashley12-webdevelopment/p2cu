import styles from "../styles/Carousel.module.css";
import { FcPrevious, FcNext } from "react-icons/fc";
import { useState, useEffect } from "react";
import Link from "next/link";

const Carousel = ({ imageArr }) => {
  let slides = [];
  let start = 0;
  const imgsPerSlide = 3;
  const [activeSlide, setActiveSlide] = useState(0);
  const noOfSlides = Math.ceil(imageArr.length / 3);

  let tempArr = [];

  useEffect(() => {
    // console.log(window.innerWidth);
    if (window.innerWidth === 992) {
    }
  });

  slides = imageArr.reduce((acc, curr) => {
    start++;
    tempArr.push(curr);
    if (start % imgsPerSlide === 0 || start === imageArr.length) {
      acc.push(tempArr);
      tempArr = [];
    }
    return acc;
  }, []);

  return (
    <section className={`section ${styles.carousel}`}>
      <div className={`section-center ${styles["carousel-center"]}`}>
        <div className={styles["slide-container"]}>
          {slides.map((slide, index) => {
            return (
              <article
                key={index}
                className={`${styles["slide"]} ${
                  index === activeSlide ? styles["slide-active"] : ""
                }`}
              >
                {slide.map((img) => {
                  return (
                    <img
                      key={img._id}
                      className="img"
                      src={img.imgPath}
                      alt={img.title}
                    />
                  );
                })}
              </article>
            );
          })}
        </div>
        <button
          className={`btn ${styles["btn-prev"]}`}
          onClick={() =>
            setActiveSlide((prev) => {
              if (prev > 0) return prev - 1;
              else return noOfSlides - 1;
            })
          }
        >
          <FcPrevious />
        </button>
        <button
          className={`btn ${styles["btn-next"]}`}
          onClick={() =>
            setActiveSlide((prev) => {
              if (prev < noOfSlides - 1) return prev + 1;
              else return 0;
            })
          }
        >
          <FcNext />
        </button>
        <Link href="/gallery">
          <a className={styles["btn-more"]}>more</a>
        </Link>
      </div>
    </section>
  );
};

export default Carousel;
