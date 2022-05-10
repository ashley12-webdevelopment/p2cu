import links from "../utils/links";
import styles from "../styles/Navlinks.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navlinks = () => {
  const router = useRouter();
  return (
    <ul className={styles["nav-links"]}>
      {links.map((link) => {
        return (
          <Link key={link.id} href={link.path} passHref>
            <li
              className={
                router.pathname === link.path
                  ? `${styles["nav-link"]} ${styles["active"]}`
                  : `${styles["nav-link"]}`
              }
            >
              <a>{link.text}</a>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Navlinks;
