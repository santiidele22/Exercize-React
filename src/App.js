import { useState } from "react";
import "./styles.css";

const Contador = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <span>{count}</span>
      <br/><br/>
      <button onClick = {() => {
        setCount(count + 1)
      }}>Increment +</button>
      <button onClick={() => {
        setCount(count - 1)
      }}>Decrement -</button>
    </>
  )
}
export default function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Contador />
    </div>
  );
}
