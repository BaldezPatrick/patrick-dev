import CardComponent from "@/components/CardComponent";
import styles from "../../styles/Projects.module.css";
import dataProjects from "./dataProjects";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsContainer}>
      <h3>My Projects</h3>
      {dataProjects.map((project) => (
        <CardComponent className={styles.projectCard} key={project.id}>
          <img src={project.image} alt={project.alt} />
          <h5>{project.name}</h5>
          <p>{project.description}</p>
          <p>Tools:</p>
          <ul>
            {project.stacks.map((stack, index) => (
              <li key={index}>{stack}</li>
            ))}
          </ul>
          <div className={styles.projectsLinks}>
            <button>
              <Link
                href={project.linkGitHub}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Code
              </Link>
            </button>
            {project.linkDemo && (
              <button>
                <Link
                  href={project.linkDemo}
                  target={"_blank"}
                  rel="nooperner noreferrer"
                >
                  Demo
                </Link>
              </button>
            )}
          </div>
        </CardComponent>
      ))}
    </section>
  );
};

export default Projects;
