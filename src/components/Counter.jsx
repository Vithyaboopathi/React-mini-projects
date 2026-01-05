import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="counter">
      <h2>Counter Component</h2>
      <p>Current Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}
export default Counter;
