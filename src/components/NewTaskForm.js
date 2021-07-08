import React from "react";

function NewTaskForm({ category, onTaskFormSubmit, newTask, setNewTask }) {
  const categories = category.slice(1)

  const handleChange = (e) => {
    const key = e.target.name
    const value = e.target.value
    setNewTask({
      ...newTask,
      [key]:value
    })
  }

  return (
    <form className="new-task-form" onSubmit={(e) => onTaskFormSubmit(newTask, e)}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={newTask.text} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange} value={newTask.category}>
          {categories.map(cat => <option key={cat}>{cat}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
