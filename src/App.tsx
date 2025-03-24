// src/App.tsx
import React from "react";

const urlRegex =
  /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;

function App() {
  console.log(urlRegex.test("https://www.example.com/")); // Example usage
  return (
    <div>
      <h1>Regex Test</h1>
    </div>
  );
}

export default App;
