import React from "react";
import { FaReact } from "react-icons/fa";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <FaReact className={styles.spinning} size={70} />
    </div>
  );
};

export default Spinner;
