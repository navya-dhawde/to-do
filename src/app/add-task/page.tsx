"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/taskSlice"; // Import addTask action
import { useRouter } from "next/navigation";
import "../style.css";

export default function AddTaskPage() {
  const [title, setTitle] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask = { title, completed }; // Task without the 'id'

    try {
      // Dispatch the async action correctly
      await dispatch(addTask(newTask));  // Wait for the action to be dispatched

      alert("Task added successfully!");
      router.push("/"); // Redirect to home after adding task
    } catch (error) {
      console.error("Error adding task:", error);
      alert("Failed to add task.");
    }
  };

  return (
    <div className="add p-8">
      <h1 className="text-xl font-bold mb-4">Add Task</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-customRed p-10 border rounded text-2xl"
        />
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          Completed
        </label>
        <button type="submit" className="bg-customDRed px-4 py-2 text-white rounded">
          Add Task
        </button>
      </form>
    </div>
  );
}
