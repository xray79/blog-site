import React from "react";
import styles from "../styles/ContentWrapper.module.css";

function ContentWrapper({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default ContentWrapper;
