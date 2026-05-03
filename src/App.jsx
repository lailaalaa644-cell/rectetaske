import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (text.length < 10) {
      setStatus("Too short");
    } else if (text.length <= 20) {
      setStatus("Good");
    } else {
      setStatus("Too long");
    }
  }, [text]);

  return (
    <div>
      <h1>Character Counter</h1>
      <input type="text" value={text} maxLength={30} onChange={(e) => setText(e.target.value)} placeholder="Type something..."/>
      <p>Characters: {text.length}/30</p>
      <p> {status} </p>
    </div>
  );
}
export default App;