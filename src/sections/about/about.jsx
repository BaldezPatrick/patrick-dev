import styles from "../../styles/About.module.css";

const About = () => {
  return (
    <section id="about">
      <div className={styles.aboutContainer}>
        <h2>About Me</h2>
        <p>
          Hello, I'm Patrick. I'm a passionate and experienced developer with
          over a year of professional experience in the industry. My journey
          began with a strong interest in web development, and I quickly
          immersed myself in various technologies to build robust and innovative
          solutions.
        </p>
        <p>
          My expertise lies in front-end development using technologies such as
          React and JavaScript to create engaging and user-friendly interfaces.
          I've also ventured into back-end development with Node.js, handling
          server-side logic and APIs to ensure seamless communication between
          the front and back ends.
        </p>
        <p>
          Along my journey, I've had the privilege to work on large-scale
          projects that have honed my problem-solving skills and deepened my
          understanding of software architecture. I'm also familiar with Python
          and have utilized it for tasks requiring data processing and analysis.
        </p>
        <p>
          I'm not just a developer; I'm a creative thinker who loves turning
          complex challenges into elegant solutions. I'm excited to continue
          growing and contributing to the ever-evolving world of technology.
        </p>
      </div>
    </section>
  );
};

export default About;
