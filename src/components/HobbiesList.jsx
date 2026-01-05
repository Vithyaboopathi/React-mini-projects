import React from "react";

function HobbiesList(props) {
  const { hobbies } = props;
  return (
    <div className="hobbies-list">
      <h2>My Hobbies</h2>
      {hobbies.length > 0 ? (
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      ) : (
        <p>No hobbies added yet.</p>
      )}
    </div>
  );
}
export default HobbiesList;
