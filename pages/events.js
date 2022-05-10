import { EventForm } from "../components";
import Head from "next/head";

const Events = () => {
  const pageHeadData = (
    <Head>
      <title>Events - Perform2CheerU</title>
      <meta
        name="description"
        content="We are happy to perform for you using our musical skills. We host Events. Contact us if you like kids musical performance. We will Perform To Cheer You"
      />
    </Head>
  );
  return (
    <>
      {pageHeadData}
      <section className={`section`}>
        <div className={`section-center`}>
          <div className={`section-title`}>
            <h1>Events</h1>
            <div className={`underline`} />
          </div>
          <p>
            please fill the form below to book an event with us.{" "}
            <span>we will cheer you</span>
          </p>
          <EventForm />
        </div>
      </section>
    </>
  );
};

export default Events;
