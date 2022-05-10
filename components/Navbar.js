import styles from "../styles/Navbar.module.css";
import { Navlinks, Logo } from "./";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [fixNavbar, setFixNavbar] = useState(false);

  const controlNavbar = () => {
    if (window.pageYOffset > 150) {
      setFixNavbar(true);
    } else {
      setFixNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const scrollEvent = () => {
    // console.log(window.pageYOffset);
  };
  return (
    <nav
      className={`${styles.navbar} ${fixNavbar ? styles["navbar-fixed"] : ""}`}
      onScroll={scrollEvent}
    >
      {/* <div className={styles["nav-center"]}> */}
      <div className={styles["nav-header"]}>
        <h2>Perfrom 2 Cheer U</h2>
      </div>
      <div className={styles["nav-content"]}>
        <div className={styles["content-center"]}>
          <Logo />
          <Navlinks />
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
