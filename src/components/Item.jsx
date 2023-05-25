import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ToDoList from "./List";

function MentionItem({ onAddItem }) {
  const [toDos, setToDos] = useState("");

  function handleInputChange(event) {
    setToDos(event.target.value);
  }
  function handleAddItem() {
    onAddItem(toDos);
    setToDos("");
  }

  return (
    <div className='row'>
      <div className='col'>
        <input
          className='form-control m-2'
          type='text'
          placeholder='Write your thoughts here'
          value={toDos}
          onChange={handleInputChange}
        />
      </div>
      <div className='col-auto'>
        <button
          type='button'
          className='btn btn-primary m-2'
          onClick={handleAddItem}
        >
          Add Item
        </button>
      </div>
    </div>
  );
}

export default MentionItem;
