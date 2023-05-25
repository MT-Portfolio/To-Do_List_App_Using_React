import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function ToDoList({ items, onDeleteItem }) {
  return (
    <div>
      <b>
        <label>
          <u>Tasks:</u>
        </label>
      </b>
      <br />
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "4px",
            marginRight: "4px",
          }}
        >
          {index + 1}
          {". "} {item}
          <button
            type='button'
            className='btn btn-danger'
            onClick={() => onDeleteItem(index)}
          >
            Remove Item
          </button>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
