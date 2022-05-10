import { FaTimes } from "react-icons/fa";
import styles from "../styles/ModalMessage.module.css";

const ModalMessage = ({ msg, closeModal }) => {
  const { type, title, content } = msg;
  return (
    <section className={styles["modal-message-overlay"]}>
      <div className={styles["modal-container"]}>
        <button
          type="button"
          className={styles["btn-close"]}
          onClick={closeModal}
        >
          <FaTimes />
        </button>
        <div className={styles["modal-content"]}>
          <h5
            className={`${styles["title"]} ${
              type ? styles[`title-${type}`] : ""
            }`}
          >
            {title}
          </h5>
          <p className={styles["content"]}>{content}</p>
        </div>
      </div>
    </section>
  );
};

export default ModalMessage;
