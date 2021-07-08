import React from "react";

function TaskList({ tasks }) {

  return (
    <div className="tasks">
      {tasks}
    </div>
  );
}

export default TaskList;
