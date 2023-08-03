import Link from "next/link";
import styles from "../../styles/Contact.module.css";
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      <article className={styles.contactContainer}>
        <h3>Contact Me</h3>
        <ul>
          <li>
            <MdEmail size={30} />
            <strong>patrickbaldex@gmail.com</strong>
          </li>
          <li>
            <Link
              href={"https://github.com/BaldezPatrick"}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              {" "}
              <AiFillGithub size={30} />{" "}
            </Link>
            <strong>GitHub</strong>
          </li>
          <li>
            <Link
              href={"https://www.linkedin.com/in/patrick-baldez-298064213"}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={30} />
            </Link>
            <strong>LinkedIn</strong>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Contact;
