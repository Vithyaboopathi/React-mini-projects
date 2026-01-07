import React from "react";

const NumberFilter = () => {
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div className="numberFilter">
      <h2>Even Numbers</h2>
      <ul>
        {numbers
          .filter((num) => num % 2 === 0)
          .map((num) => (
            <li key={num}>{num}</li>
          ))}
      </ul>
    </div>
  );
};

export default NumberFilter;
