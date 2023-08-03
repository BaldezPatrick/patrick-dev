import styles from "../styles/CardComponent.module.css";

const CardComponent = ({ children }) => {
  return <article className={styles.card}>{children}</article>;
};

export default CardComponent;
