import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTaskList] = useState(TASKS)
  const [selected, setSelected] = useState("")
  
  const handleChangeTask = (newList) => {
    setTaskList(newList)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        category = {CATEGORIES}
        setSelected = {setSelected}
        selected = {selected}
      />
      <NewTaskForm />
      <TaskList 
        tasks = {taskList}
        onChangeTask = {handleChangeTask}
        selected = {selected}
      />
    </div>
  );
}

export default App;
