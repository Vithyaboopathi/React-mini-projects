import React from "react";

const GreetingMessage = () => {
  const hours = new Date().getHours();

  return (
    <div className="greeting-message">
      <h4>Greeting Message</h4>
      <h1>
        {" "}
        {hours < 12
          ? "Good Morning"
          : hours < 18
          ? "Good Afternoon"
          : "Good Evening"}{" "}
      </h1>
    </div>
  );
};

export default GreetingMessage;
