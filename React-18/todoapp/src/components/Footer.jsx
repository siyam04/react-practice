import styles from "./footer.module.css";

function Footer(props) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed: {props.completedTodos}</span>
      <span className={styles.item}>Total Todos: {props.totalTodos}</span>
    </div>
  );
}

export default Footer;
