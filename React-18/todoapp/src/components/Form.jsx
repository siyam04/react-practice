import { useState } from "react";
import styles from "./form.module.css";

function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          placeholder="Enter Todo Item..."
          type="text"
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
