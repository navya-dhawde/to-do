"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../store/taskSlice";
import type { RootState, AppDispatch } from "../store"; // Adjust path if needed
import { useRouter } from "next/navigation";
import "./style.css";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function HomePage() {
  const { tasks, loading } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  // Fetch tasks from the API on component mount
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) {
    return <p className="text-center text-gray-600 mt-8">Loading tasks...</p>;
  }

  return (
    <div className="p-8">
      {/* Welcome Banner */}
      <div className="intro flex items-center bg-customPurple text-customDark rounded-lg p-10 mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Welcome back, User!</h1>
          <p className="mt-2 text-lg">Organize yourself and get things done!</p>
        </div>
        <img
  src="/imgg.png"
  alt="Welcome"
  className="imgs" // Apply 'imgs' class directly to the image tag
/>

      </div>

      {/* Add Task Section */}
      <div className="add-task bg-customRed p-6 rounded-lg mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-customDark">
          Want to add more tasks?
        </h2>
        <button
          className="px-4 py-2 bg-customDRed text-white rounded"
          onClick={() => router.push("/add-task")}
        >
          Add Task
        </button>
      </div>

      {/* To-Do List Section */}
      <h1 className="hello text-2xl text-gray-300 font-bold mb-4">To-Do List</h1>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks available. Add some tasks to get started!</p>
      ) : (
        <ul className="list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="item bg-customLPink p-4 border rounded mb-2 flex justify-between items-center"
            >
              <div>
                <h2 className="text-customDPink font-semibold">{task.title}</h2>
                <p className="text-gray-500">
                  Status: {task.completed ? "Completed" : "Pending"}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  className="px-4 py-2 bg-customPink text-white rounded"
                  onClick={() => router.push(`/edit-task?id=${task.id}`)}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
