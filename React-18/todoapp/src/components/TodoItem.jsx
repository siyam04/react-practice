import styles from "./todoitem.module.css";

const TodoItem = (props) => {
  function handleDelete(item) {
    props.setTodos(props.todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    props.setTodos(
      props.todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  const className = props.item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span
          className={className}
          onClick={() => handleClick(props.item.name)}
        >
          {props.item.name}
        </span>
        <span>
          <button
            className={styles.deleteBtn}
            onClick={() => handleDelete(props.item)}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
};

export default TodoItem;
