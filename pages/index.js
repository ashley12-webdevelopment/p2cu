import { Hero, Carousel, Aboutus, Whatwedo } from "../components";
// import carouselImages from "../utils/carouselImages";
import Head from "next/head";
import dbConnect from "../db/connect";
import Photo from "../model/Photo";

function Home({ carouselImages }) {
  return (
    <>
      <Head>
        <title>Perform 2 Cheer U</title>
        <meta
          name="description"
          content="We are a kid's group playing different musical instruments to cheer you. We will Perform To Cheer You"
        ></meta>
      </Head>
      <Hero />
      <Carousel imageArr={carouselImages} />
      <Aboutus />
      <Whatwedo />
    </>
  );
}

export async function getStaticProps(context) {
  try {
    await dbConnect();
    let carouselImages = await Photo.find({ includeInCarousel: true });
    carouselImages = JSON.parse(JSON.stringify(carouselImages));
    return { props: { carouselImages } };
  } catch (error) {
    return { props: { errorMsg: error.message } };
  }
}

export default Home;
