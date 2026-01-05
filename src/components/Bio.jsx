import React from "react";

function Bio(props) {
  return (
    <div className="bio">
      <h2>Personal Bio</h2>
      <p> I'm {props.name}</p>
      <p>{props.age} years old</p>
      <p>{props.bio}</p>
    </div>
  );
}

export default Bio;
