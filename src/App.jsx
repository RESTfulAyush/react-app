import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1>🚀 Hello, React!</h1>
      <p>This is a sample React app.</p>

      <button style={styles.button} onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;
