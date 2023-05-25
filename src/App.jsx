import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import AppBanner from "./components/AppBanner";
import MentionItem from "./components/Item";
import ToDoList from "./components/List";

function ToDoApp() {
  useEffect(() => {
    console.log("App is mounted");
  }, []);

  const [items, setItems] = useState([]);

  function handleAddItem(newItems) {
    setItems((prevItems) => [...prevItems, newItems]);
  }

  function handleDeleteItem(index) {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  }

  return (
    <div>
      <AppBanner />
      <br />
      <MentionItem onAddItem={handleAddItem} />
      <br />
      <ToDoList items={items} onDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default ToDoApp;
