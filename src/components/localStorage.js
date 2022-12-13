import { useState } from "react";

export default function LocalStorage() {
  const ls = localStorage;
  const [value, setValue] = useState("");

  ls.setTodo("todo1", "value1");
  ls.setTodo("todo2", "value2");
  ls.setTodo("todo3", "value3");
  ls.removeTodo("todo3");

  const ajouter = () => {
    const inAsInt = parseInt(value) + 1;
    setValue(inAsInt.toString());
    ls.setTodo("value", inAsInt.toString());
  };
  return (
    <div>
      <h2>LocalStorage :</h2>
      <ul>
        {Object.keys(ls).map((key) => (
          <li>
            {key}: {ls.getTodo(key)}
          </li>
        ))}
      </ul>
      <p> valeur de todo3: {ls.getItem("todo3")}</p>
      <button onClick={ajouter}>Ajouter</button>
    </div>
  );
}
