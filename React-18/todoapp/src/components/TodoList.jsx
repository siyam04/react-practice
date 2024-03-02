import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

function TodoList(props) {
  const sortedTodos = props.todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={props.todos}
          setTodos={props.setTodos}
        />
      ))}
    </div>
  );
}

export default TodoList;
