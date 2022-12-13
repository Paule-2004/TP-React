import React, { useState } from "react";

const AddTodoForm = () => {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("user enteres" + value);
  };
  return (
    <form onSubmit={onSubmit} className="form-inline">
      <label className="sr-only">Name</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="form-control mb-2 mr-sm-2"
        placeholder="Add Todo..."
      ></input>

      <button type="submit" className="todo-button">
        {" "}
        add Todo
      </button>
    </form>
  );
};
export default AddTodoForm();
