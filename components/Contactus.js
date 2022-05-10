import styles from "../styles/Contactus.module.css";

const Contactus = ({ customCss }) => {
  return (
    <section className={`${customCss} styles["contact-us"]`}>
      <div className={styles["row"]}>
        <label>contact us</label>
        <p>0431234567</p>
      </div>
      <div className={styles["row"]}>
        <label>email us</label>
        <p>info@perform2cheeru.com</p>
      </div>
    </section>
  );
};

export default Contactus;
