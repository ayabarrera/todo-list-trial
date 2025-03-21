import React from "react";

function TodoItem({ task, deleteTask, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.id);
  }

  return (
    <div className="todo-item">
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      
      <div className="task-content">
        <h3>{task.title}</h3> 
        <p>{task.description}</p> 
      </div>

      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}

export default TodoItem;
