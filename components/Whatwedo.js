import styles from "../styles/Whatwedo.module.css";
import Link from "next/link";

const Whatwedo = () => {
  return (
    <section className={`section ${styles["what-we-do"]}`}>
      <div className={`section-center ${styles["what-we-do-center"]}`}>
        <div className={styles["what-we-do-title"]}>
          <h2>what we do</h2>
          <div className={`underline ${styles["underline"]}`}></div>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
          voluptas nobis soluta deleniti qui quidem, ducimus, consequuntur sint
          eveniet nisi eum adipisci et atque a ipsa impedit fugiat! Consequatur
          recusandae accusantium est inventore labore nemo praesentium provident
          iusto iure, repudiandae nulla tenetur non illum rerum. Adipisci
          sapiente esse quasi, corrupti sed facere inventore ex dolores impedit
          fugit hic, suscipit laudantium vel molestias quae voluptas eligendi
          vitae aliquid officiis nobis. Cum accusantium impedit deleniti
          asperiores expedita commodi quo tenetur vel dicta non omnis dolorum,
          quisquam saepe officiis quos, ad eum voluptatum molestias fuga iste.
          Iusto a officiis facere sit est aspernatur?
        </p>
        <Link href="/events">
          <a className={`btn ${styles["btn-event"]}`}>book an event</a>
        </Link>
      </div>
    </section>
  );
};

export default Whatwedo;
