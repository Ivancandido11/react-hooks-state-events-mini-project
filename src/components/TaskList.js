import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteClick }) {
  const displayTasks = tasks.map(task => {
    return (
      <Task
        key={task.text}
        category={task.category}
        text={task.text}
        onDeleteClick={onDeleteClick}
      />
    )
  })
  return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;
