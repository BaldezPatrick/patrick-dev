import Link from "next/link";
import dataSocial from "./dataSocial";
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <section id="header">
      <div className={styles.headerContent}>
        <h3>Patrick Baldez</h3>
        <p>Web developer</p>
        <p className={styles.headerDescription}>
          Are you looking for a talented and passionate web developer to help
          bring your vision to life? Look no further! I specialize in creating
          elegant and engaging web solutions that are tailored to meet the
          specific needs of my clients.
        </p>
        <div className={styles.headerLinks}>
          <Link className={styles.headerContactLinks} href={"#contact"}>
            Let's Talk
          </Link>
          <Link className={styles.headerContactLinks} href={"#projects"}>
            My projects
          </Link>
        </div>
        <div className={styles.headerSocialLink}>
          {dataSocial.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
