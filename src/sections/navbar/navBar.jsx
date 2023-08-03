import Link from "next/link";
import dataNav from "./dataNav";
import styles from "../../styles/NavBar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  const hideMenu = () => {
    setIsMenu(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.navContainerMobile}>
          <Link href={"/"} className={styles.logo}>
            Patrick Dev
          </Link>
          <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
            {isMenu ? "X" : "☰"}
          </div>
        </div>
        <ul className={`${styles.menu} ${isMenu ? styles.visible : ""}`}>
          {dataNav.map((item) => (
            <li key={item.id}>
              <Link href={item.link} onClick={hideMenu}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
