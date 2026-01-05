import React from "react";

function Greeting(props) {
  return (
    <div className="greeting">
      <h1
        style={{
          backgroundColor: "#4caf50",
          color: "white",
          textAlign: "center",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        Hello, {props.userName}!
      </h1>
    </div>
  );
}
export default Greeting;
