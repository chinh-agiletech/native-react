import React, { useState } from "react";
import Button from "../../../components/ui/Button/Button";
import DialogCreationTodo from "./components/DialogCreationTodo/DialogCreationTodo";
import styles from "./index.module.css"; // import module CSS

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function TodoComponent() {
  const [isOpenDialogCreation, setIsOpenDialogCreation] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Write Todo App", completed: true },
  ]);

  const handleOpenDialogCreation = () => {
    setIsOpenDialogCreation(true);
  };

  const handleAddTodo = (title: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setIsOpenDialogCreation(false);
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const stylesButton = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
  };

  return (
    <div className={styles.todoContainer}>
      <h1>Todo List</h1>
      <div className="" style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          title="Create new"
          onPress={handleOpenDialogCreation}
          style={stylesButton}
        />
      </div>

      {/* <table className={styles.todoTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr
              key={todo.id}
              className={todo.completed ? styles.completed : ""}
            >
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Yes" : "No"}</td>
              <td>
                <button onClick={() => toggleComplete(todo.id)}>
                  {todo.completed ? "Undo" : "Complete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <DialogCreationTodo
        visible={isOpenDialogCreation}
        onClose={() => setIsOpenDialogCreation(false)}
        onCreate={handleAddTodo}
      />
    </div>
  );
}

export default TodoComponent;
