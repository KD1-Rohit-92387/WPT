import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { deleteTaskById, findAllTasks } from "../services/tasks";
import { Link } from "react-router";
import { toast } from "react-toastify";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const task = findAllTasks();
    console.log(task);
    setTasks(task);
  }, []);

  const handleDelete = (taskId) => {
    const deltask = deleteTaskById(taskId);
    setTasks(deltask);
    toast.success("Task deleted successfully!");
  };

  return (
    <div className="p-4">
      <h3>My Tasks</h3>

      <table className="border border-black">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.title}</td>
              <td>{t.desc}</td>
              <td>
                <button
                  onClick={() => handleDelete(t.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-3">
        <Link className="btn btn-primary mx-3" to="/taskform">
          Add Task
        </Link>
      </div>
    </div>
  );
}

export default TaskList;