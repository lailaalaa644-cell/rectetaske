import React, { useState } from "react";

function UserForm({ onAddUser }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!name.trim()) {
      return "Name is required";
    }
    if (!age || isNaN(age) || Number(age) <= 18) {
      return "Age must be a number greater than 18";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    onAddUser({
      name,
      age: Number(age),
    });

   
    setName("");
    setAge("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 rounded bg-gray-800 border border-gray-600"
      />

      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="p-2 rounded bg-gray-800 border border-gray-600"
      />

      <button className="bg-blue-500 p-2 rounded hover:bg-blue-600">
        Add User
      </button>

      {error && <p className="text-red-400 text-sm">{error}</p>}
    </form>
  );
}

export default UserForm;