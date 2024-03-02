import { useState } from "react";
import Footer from "./Footer";
import Form from "./Form";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.done).length;

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer totalTodos={totalTodos} completedTodos={completedTodos} />
    </div>
  );
};

export default Todo;
