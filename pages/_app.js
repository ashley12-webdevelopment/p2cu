import "../styles/globals.css";
import { Layout } from "../components";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Perform 2 Cheer U</title>
          <meta
            name="description"
            content="We are a kid's group playing different musical instruments to cheer you. We will Perform To Cheer You"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
