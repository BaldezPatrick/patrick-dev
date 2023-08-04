import CardComponent from "@/components/CardComponent";
import dataSkills from "./dataSkills";
import styles from "../../styles/Skills.module.css";

const Skills = () => {
  return (
    <section id="skills">
      <div className={styles.skillsContainer}>
        <h3>Skills</h3>
        <div className={styles.cardContainer}>
          {dataSkills.map((item) => (
            <CardComponent className={styles.card} key={item.id}>
              {item.icon} <p>{item.name}</p>
            </CardComponent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
