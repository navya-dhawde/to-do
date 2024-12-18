"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "../style.css"

export default function EditTaskPage() {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const taskId = searchParams.get("id");

  useEffect(() => {
    // Fetch the task to edit
    fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
      .then((response) => response.json())
      .then((data) => {
        setTask(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching task:", error));
  }, [taskId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${taskId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(task),
        }
      );

      if (response.ok) {
        alert("Task updated successfully!");
        router.push("/");
      } else {
        alert("Failed to update task.");
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  if (loading) {
    return <p>Loading task...</p>;
  }

  return (
    <div className="edit p-8">
      <h1 className="text-2xl text-customDPink font-bold mb-4 items-center justify-center">Edit Task</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="bg-customLPink p-10 border rounded text-2xl text-bold"
        />
        <label>
          <input
            className="check"
            type="checkbox"
            checked={task.completed}
            onChange={(e) => setTask({ ...task, completed: e.target.checked })}
          />
          Completed
        </label>
        <button type="submit" className="bg-customPink px-4 py-2 bg-blue-500 text-white rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}
