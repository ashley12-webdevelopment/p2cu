import styles from "../styles/Aboutus.module.css";

const Aboutus = () => {
  return (
    <section className={`section`}>
      <div className={`section-center ${styles["about-center"]}`}>
        <article className={styles["column-1"]}>
          <div className={`section-title ${styles["about-title"]}`}>
            <h2>who we are</h2>
            <div className={`underline ${styles["about-underline"]}`}></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            dolores cupiditate numquam laborum, quia repudiandae eaque tempora,
            quo optio voluptas harum esse ipsum obcaecati dolorem ut? Eligendi
            incidunt, sequi repudiandae nobis temporibus vero ex molestias
            dolorem. Cum consequuntur minima nisi dignissimos distinctio at!
            Possimus expedita ab officiis, doloremque quas ipsum autem
            perspiciatis praesentium minus facere id dignissimos aliquam fuga
            quasi dolore eos, pariatur totam eaque ea voluptatum ratione
            repudiandae nisi? Totam, dicta? Facilis, consequatur quia ipsum,
            adipisci inventore quo maiores, ut quae expedita laborum repudiandae
            architecto fuga fugit numquam tempora repellat! Illum porro
            perspiciatis nostrum asperiores atque reiciendis unde aperiam!
          </p>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            adipisci nisi commodi repellendus ut harum aperiam, totam nesciunt
            veniam molestias quas distinctio laboriosam vitae accusantium
            ratione iusto mollitia unde voluptate incidunt! Mollitia praesentium
            rem similique distinctio amet deleniti autem ab accusamus, officia
            sunt fuga accusantium, quasi aliquid harum illum maxime?
          </p> */}
        </article>
        <article className={styles["column-2"]}>
          <img src="/images/about.jpg" alt="about us" className={`img`} />
        </article>
      </div>
    </section>
  );
};

export default Aboutus;
