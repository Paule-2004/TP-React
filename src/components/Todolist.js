import React from "react";
import TodoItem from "./TodoItem";

const Todolist = () => {
  const todos = [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: false },
    { id: 4, title: "todo4", completed: true },
    { id: 5, title: "todo5", completed: true },
    { id: 6, title: "todo6", completed: true },
  ];

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default Todolist();
