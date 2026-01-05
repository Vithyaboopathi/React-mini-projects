import React, { useState } from "react";
import Bio from "./components/Bio.jsx";
import Greeting from "./components/Greeting.jsx";
import Counter from "./components/Counter.jsx";
import HobbiesList from "./components/HobbiesList.jsx";
import Welcome from "./components/welcome.jsx";
import Increment from "./components/Increment.jsx";
import Boolean from "./components/Boolean.jsx";
import Timer from "./components/Timer.jsx";

function App() {
  const [hobbies, setHobbies] = useState(["Reading", "Traveling", "Coding"]);

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
      <Increment />
      <Boolean />
      <Timer />
    </div>
  );
}
export default App;
