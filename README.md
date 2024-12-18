# To-Do Application

This is a to-do application built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com). It uses Redux Toolkit for state management and provides a simple interface to add, edit, and manage tasks efficiently.

## Features

- Add new tasks with a clean UI.
- Edit existing tasks to update details.
- Delete tasks when completed or no longer needed.
- Persistent state management using Redux Toolkit.
- Responsive and optimized design using Tailwind CSS.
- Modular file structure for scalability.

## Getting Started

Follow the instructions below to set up and run the application locally.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or above recommended)
- [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/navya-dhawde/to-do.git
   cd to-do
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   yarn dev
   ```
4. Open the app in your browser at http://localhost:3000.

### Directory Structure
   ```bash
   src/ ├── app/ │ ├── add-task/ # Page to add a new task │ ├── edit-task/ #    Page to edit an existing task │ ├── layout.tsx # App layout │ ├──            page.tsx # Home page │ ├── style.css # Global styles │ ├──                
   ReduxProvider.tsx # Redux provider for state management ├── store/ │ ├── 
   index.ts # Redux store setup │ ├── taskSlice.ts # Reducer for task- 
   related actions ├── public/ │ ├── imgg.png # Placeholder image for 
   testing ├── tailwind.config.ts # Tailwind CSS configuration ├── 
   tsconfig.json # TypeScript configuration └── yarn.lock # Dependency lock 
   file
   ```
