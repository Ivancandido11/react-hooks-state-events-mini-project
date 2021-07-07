import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  const handleDeleteClick = (text) => {
    const filteredTasks = tasks.filter(task => task.text !== text)
    onDelete(filteredTasks)
    console.log(filteredTasks)
  }
  
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task 
          key={task.text}
          text={task.text}
          category={task.category}
          onDeleteClick={handleDeleteClick}
        />))
      }
    </div>
  );
}

export default TaskList;
