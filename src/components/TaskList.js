import React from "react";
import Task from "./Task";

function TaskList({ tasks, onChangeTask, selected }) {

  const handleDeleteClick = (text) => {
    const filteredTasks = tasks.filter(task => task.text !== text)
    onChangeTask(filteredTasks)
  }
  const displayTasks = () => {
    const selectedTasks = tasks.filter(task => task.category === selected)
    if (selected === "All" || selected === "") {
      return tasks.map((task) => (
        <Task 
          key={task.text}
          text={task.text}
          category={task.category}
          onDeleteClick={handleDeleteClick}
        />))
    } else {
      return selectedTasks.map((task) => (
        <Task 
          key={task.text}
          text={task.text}
          category={task.category}
          onDeleteClick={handleDeleteClick}
        />))
    }
  }

  return (
    <div className="tasks">
      {displayTasks()}
    </div>
  );
}

export default TaskList;
