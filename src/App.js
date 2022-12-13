import "./App.css";
import Todolist from "./components/Todolist";
import AddTodoForm from "./components/AddTodoForm";
import TotalItems from "./components/TotalItems";
//import { useState } from "react";

function App() {
  return (
    <div className="container bg-while p-4 mt-5">
      <h1>My Todo List</h1>
      <AddTodoForm />
      <Todolist />
      <TotalItems />
    </div>
  );
}

export default App;
