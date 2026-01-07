import React, { useState } from "react";
import Bio from "./components/Bio.jsx";
import Greeting from "./components/Greeting.jsx";
import Counter from "./components/Counter.jsx";
import HobbiesList from "./components/HobbiesList.jsx";
import Welcome from "./components/Welcome.jsx";
import Increment from "./components/Increment";
import Timer from "./components/Timer.jsx";
import HelloMessage from "./components/HelloMessage";
import TaskManager from "./components/TaskManager.jsx";
import StudentsMarks from "./components/StudentsMarks.jsx";
import GreetingMessage from "./components/GreetingMessage.jsx";
import NumberFilter from "./components/NumberFilter.jsx";

function App() {
  const [hobbies] = useState(["Reading", "Traveling", "Coding"]);

  return (
    <div className="app">
      <Bio
        name="VithyaSri"
        age={25}
        bio="I'm a passionate Fullstack developer."
      />
      <Greeting userName="Abhimanyu" />
      <Counter />
      <HobbiesList hobbies={hobbies} />
      <Welcome />
      <HelloMessage />
      <Increment />
      <Timer />
      <TaskManager />
      <StudentsMarks />
      <GreetingMessage />
      <NumberFilter />
    </div>
  );
}
export default App;
