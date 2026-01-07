import React, { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      completed: true,
    },
    {
      id: 2,
      title: "Learn Crocheting",
      completed: false,
    },
    {
      id: 3,
      title: "Do Workout",
      completed: false,
    },
    {
      id: 4,
      title: "Go For a Walk",
      completed: false,
    },
    {
      id: 5,
      title: "Eat Healthy Today",
      completed: false,
    },
    {
      id: 6,
      title: "Read 10 Pages",
      completed: false,
    },
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="task-manager">
      <h2>Task Manager</h2>
      {tasks.length === 0
        ? "No Tasks Added"
        : tasks.map((task) => {
            return (
              <div className="task" key={task.id}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <li
                  style={{
                    textDecoration:
                      task.completed !== true ? "none" : "line-through",
                  }}
                >
                  {task.title}
                </li>
              </div>
            );
          })}
    </div>
  );
}
export default TaskManager;
