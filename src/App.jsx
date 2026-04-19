import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  // useEffect handles the logic (important!)
  useEffect(() => {
    if (text.length < 10) {
      setStatus("Too short");
    } else if (text.length <= 20) {
      setStatus("Good");
    } else {
      setStatus("Too long");
    }
  }, [text]);

  const handleChange = (e) => {
    const value = e.target.value;

    // prevent typing after 30 chars
    if (value.length > 30) return;

    setText(value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-2xl mb-4">Character Counter</h1>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="p-2 rounded bg-gray-800 border border-gray-600 w-80"
        placeholder="Type something..."
      />

      <p className="mt-3">Characters: {text.length}/30</p>

      <p
        className={`mt-2 font-semibold ${
          status === "Too short"
            ? "text-red-400"
            : status === "Good"
            ? "text-green-400"
            : "text-yellow-400"
        }`}
      >
        {status}
      </p>
    </div>
  );
}

export default App;