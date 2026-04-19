import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const validate = (value) => {
    if (!value.trim()) {
      return "Task cannot be empty";
    }
    if (value.trim().length < 3) {
      return "Task must be at least 3 characters";
    }
    return "";
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setTask(value);
    setError(validate(value));
  };

  const handleAdd = () => {
    const validationError = validate(task);
    if (validationError) {
      setError(validationError);
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
    setError("");
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const isInvalid = validate(task) !== "";

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>

      <div className="flex gap-2 w-full max-w-md">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          className="flex-1 p-2 rounded bg-gray-800 border border-gray-600"
          placeholder="Enter task..."
        />

        <button
          onClick={handleAdd}
          disabled={isInvalid}
          className={`px-4 py-2 rounded ${
            isInvalid
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Add
        </button>
      </div>

      {error && <p className="text-red-400 mt-2">{error}</p>}

      <p className="mt-4">Total Tasks: {tasks.length}</p>

      <ul className="mt-4 w-full max-w-md space-y-2">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks yet</p>
        ) : (
          tasks.map((t, index) => (
            <li
              key={index}
              className="flex justify-between bg-gray-800 p-3 rounded"
            >
              <span>{t}</span>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-400"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;