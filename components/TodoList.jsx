"use client";

import { useState } from "react";
import TodoItem from "./TodoItem";
import styles from './TodoList.css';

function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "ToDo App",
      description: "Create a Simple ToDo App with Next JS",
      completed: true,
    },
    {
      id: 2,
      title: "Grocery",
      description: "Buy eggs and milk",
      completed: false,
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function addTask() {
    if (!title.trim() || !description.trim()) return; 

    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TodoList;
