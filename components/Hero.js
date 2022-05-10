import Link from "next/link";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles["hero-banner"]}>
        <h1>We will cheer you....</h1>
        <h5>Contact Us Now</h5>
        <Link href="/events">
          <a className={`btn ${styles["btn-hero"]}`}>Contact Now</a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
