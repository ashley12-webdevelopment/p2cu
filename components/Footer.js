import { Logo, Contactus } from "./";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`section-center ${styles["footer-center"]}`}>
        <Logo />
        <Contactus customCss={styles["contact-us"]} />
        <p className={styles["copy-rights"]}>
          &copy; <span>{new Date().getFullYear()}</span>. all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
