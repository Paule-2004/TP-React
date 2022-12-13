import React from "react";

const TodoItem = ({ id, title, completed }) => {
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center"></span>
        <button className="btn btn-danger">Delete</button>
      </div>
    </li>
  );
};

export default TodoItem();
