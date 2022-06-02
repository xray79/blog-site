import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.btnContainer}>
        <Link href="/">
          <button className={styles.btn}>Dev.io</button>
        </Link>
      </div>

      <div>
        <Link href="/">
          <a className={styles.headerLinks}>Home</a>
        </Link>
        <Link href="/about">
          <a className={styles.headerLinks}>About</a>
        </Link>
      </div>
    </header>
  );
}

export default Header;
