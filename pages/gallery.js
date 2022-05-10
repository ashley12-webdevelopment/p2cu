import dbConnect from "../db/connect";
import Photo from "../model/Photo";
import { Gallery } from "../components";
import { useState, useEffect } from "react";
import Head from "next/head";

const filterArray = (gallery, totalColumns, colNo) => {
  return gallery.filter((_, index) => index % totalColumns === colNo - 1);
  // if (colNo === 1) {
  //   return gallery.filter((_, index) => index % 3 === 0);
  // }
  // if (colNo === 2) {
  //   return gallery.filter((_, index) => index % 3 === 1);
  // }
  // if (colNo === 3) {
  //   return gallery.filter((_, index) => index % 3 === 2);
  // }
};

const GalleryPage = ({ galleryImgs, errorMessage }) => {
  // const [col1Gallery, setCol1Gallery] = useState(filterArray(galleryImgs, 1));
  // const [col2Gallery, setCol2Gallery] = useState(filterArray(galleryImgs, 2));
  // const [col3Gallery, setCol3Gallery] = useState(filterArray(galleryImgs, 3));

  const [galleryArray, setGalleryArray] = useState([
    filterArray(galleryImgs, 3, 1),
    filterArray(galleryImgs, 3, 2),
    filterArray(galleryImgs, 3, 3),
  ]);

  const updateGallery = () => {
    // console.log("Update Gallery CALLED:" + window.innerWidth);
    if (window.innerWidth >= 992) {
      setGalleryArray((prev) => {
        return [
          filterArray(galleryImgs, 3, 1),
          filterArray(galleryImgs, 3, 2),
          filterArray(galleryImgs, 3, 3),
        ];
      });
    } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
      setGalleryArray((prev) => {
        return [filterArray(galleryImgs, 2, 1), filterArray(galleryImgs, 2, 2)];
      });
    } else if (window.innerWidth < 768) {
      setGalleryArray((prev) => {
        return [filterArray(galleryImgs, 1, 1)];
      });
    }
  };

  useEffect(() => {
    // console.log("Gallery Use effect CALLED" + window.innerWidth);
    updateGallery();
    window.addEventListener("resize", updateGallery);
    return () => {
      window.removeEventListener("resize", updateGallery);
    };
    //eslint-disable-next-line
  }, []);

  const pageHeadData = (
    <Head>
      <title>Our Gallery - Perform2CheerU</title>
      <meta
        name="description"
        content="Check out our skills in action. Images of Kids performing showcasing our musical skills. Contact us if you like kids musical performance. We will Perform To Cheer You"
      />
    </Head>
  );

  if (errorMessage) {
    return (
      <>
        {pageHeadData}
        <p>Error Loading Page....</p>;
      </>
    );
  }
  return (
    <>
      {pageHeadData}
      <section className={`section`}>
        <div className={`section-center`}>
          <div className={`section-title`}>
            <h2>Gallery</h2>
            <div className={`title-underline`} />
          </div>
          <div className={`section-content`}>
            <Gallery galleryItems={galleryArray} originalArray={galleryImgs} />
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;

export async function getStaticProps(context) {
  let galleryImgs = [];

  try {
    await dbConnect();
    galleryImgs = await Photo.find({ includeInGallery: true });
    galleryImgs = JSON.parse(JSON.stringify(galleryImgs));
    return {
      props: { galleryImgs },
      revalidate: 3600,
    };
  } catch (error) {
    console.log(`Gallery Page server error:` + error.message);
    return {
      props: { errorMsg: error.message },
    };
  }
}
