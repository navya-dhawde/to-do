import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define Task type
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TasksState {
  tasks: Task[];
  loading: boolean;
}

const initialState: TasksState = {
  tasks: [],
  loading: false,
};

// Fetch tasks from the JSONPlaceholder API
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
  // Limiting to first 10 tasks for simplicity
  return response.data.slice(0, 10);
});

// Add a task locally (for now, won't persist to API)
export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (task: Omit<Task, "id">, { getState }) => {
    const { tasks } = (getState() as { tasks: TasksState }).tasks;
    const newTask = { id: tasks.length + 1, ...task };
    return newTask;
  }
);

// Update a task via PATCH request
export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (updatedTask: Task) => {
    const response = await axios.patch(
      `https://jsonplaceholder.typicode.com/todos/${updatedTask.id}`,
      updatedTask
    );
    return response.data;
  }
);

// Redux Slice
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetchTasks
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false;
      })
      // Handle addTask
      .addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.tasks.push(action.payload);
      })
      // Handle updateTask
      .addCase(updateTask.fulfilled, (state, action: PayloadAction<Task>) => {
        const index = state.tasks.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      });
  },
});

export default taskSlice.reducer;
