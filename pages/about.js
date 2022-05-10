import Head from "next/head";

const About = () => {
  const pageHeadData = (
    <Head>
      <title>About US - Perform2CheerU</title>
      <meta
        name="description"
        content="We are a kid's group playing different musical instruments to cheer you based in Melbourne Australia. We will Perform To Cheer You"
      />
    </Head>
  );

  return (
    <>
      {pageHeadData}
      <p>About Us</p>;
    </>
  );
};

export default About;
