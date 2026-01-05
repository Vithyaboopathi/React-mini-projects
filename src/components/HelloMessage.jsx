import React, { useState } from "react";

function Boolean() {
  const [isTrue, setIsTrue] = useState(false);

  const toggleBoolean = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div className="boolean">
      <h2>Boolean Component</h2>
      <p>
        Current Value:{" "}
        {isTrue ? "Hello, World!" : "Value of the boolean is false"}
      </p>
      <button onClick={toggleBoolean}>Toggle Boolean</button>
    </div>
  );
}
export default Boolean;
