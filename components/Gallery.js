import styles from "../styles/Gallery.module.css";
import { ModalGallery } from "./";
import { useState } from "react";
import CloudinaryImage from "./CloudinaryImage";

const Gallery = ({ galleryItems, originalArray }) => {
  const [selectedIndex, setSelectedIndex] = useState("");
  const [showModal, setShowModal] = useState(false);

  const openModal = (id) => {
    setShowModal(true);
    setSelectedIndex(id);
  };

  const closeModal = () => {
    setSelectedIndex("");
    setShowModal(false);
  };

  if (originalArray.length === 0) {
    return <p>No images found</p>;
  }
  return (
    <>
      {showModal && (
        <ModalGallery
          galleryArray={originalArray}
          selectedIndex={selectedIndex}
          closeModal={closeModal}
        />
      )}
      <section className={styles["gallery-content"]}>
        {galleryItems.map((column, index) => {
          return (
            <div key={index} className={styles["gallery-column"]}>
              {column.map((item, itemIndex) => {
                return (
                  // <img
                  //   key={item._id}
                  //   alt={item.title}
                  //   src={item.imgPath}
                  //   className={`img`}
                  //   onClick={() => openModal(item._id)}
                  // />
                  <CloudinaryImage
                    key={item._id}
                    {...item}
                    openModal={openModal}
                    lazyLoading={
                      itemIndex <= 1 || item.eagerToLoad ? false : true
                    }
                  />
                );
              })}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Gallery;
