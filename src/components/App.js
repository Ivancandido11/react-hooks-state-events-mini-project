import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Task from "./Task";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTaskList] = useState(TASKS)
  const [selected, setSelected] = useState("")
  const [newTask, setNewTask] = useState({
    text: "",
    category: "Code"
  })
  
  const handleChangeTask = (newList) => {
    setTaskList(newList)
  }
  const newTaskSubmit = (newTask, e) => {
    e.preventDefault()
    setTaskList([...taskList, newTask])
    setNewTask({
      text: "",
      category: "Code"
    })
  }
  const handleDeleteClick = (text) => {
    const filteredTasks = taskList.filter(task => task.text !== text)
    handleChangeTask(filteredTasks)
  }
  const displayTasks = () => {
    const selectedTasks = taskList.filter(task => task.category === selected)
    if (selected === "All" || selected === "") {
      return taskList.map((task) => (
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
  //console.log(displayTasks())

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        category = {CATEGORIES}
        setSelected = {setSelected}
        selected = {selected}
      />
      <NewTaskForm
        category = {CATEGORIES}
        onTaskFormSubmit = {newTaskSubmit}
        newTask={newTask}
        setNewTask={setNewTask}
      />
      <TaskList 
        tasks = {displayTasks()}
        //onChangeTask = {handleChangeTask}
        //selected = {selected}
      />
    </div>
  );
}

export default App;
