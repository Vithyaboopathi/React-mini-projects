import React from "react";

const StudentsMarks = () => {
  const studentsList = [
    {
      id: 1,
      name: "Vijay",
      mark: 60,
    },
    {
      id: 2,
      name: "Prasath",
      mark: 70,
    },
    {
      id: 3,
      name: "Pravin",
      mark: 80,
    },
    {
      id: 4,
      name: "Pramoth",
      mark: 40,
    },
    {
      id: 5,
      name: "Pragan",
      mark: 35,
    },
    {
      id: 6,
      name: "Rijusha",
      mark: 30,
    },
    {
      id: 7,
      name: "Aksha",
      mark: 90,
    },
    {
      id: 8,
      name: "Pooja",
      mark: 100,
    },
    {
      id: 9,
      name: "Pranika",
      mark: 40,
    },
    {
      id: 10,
      name: "Pravya",
      mark: 20,
    },
  ];
  return (
    <div className="students-marks">
      <h2>Students List </h2>
      {studentsList.length === 0
        ? "No List to display"
        : studentsList.map((student) => {
            return (
              <li
                style={{ color: student.mark > 50 ? "green" : "red" }}
                key={student.id}
              >
                {student.name} : {student.mark}
              </li>
            );
          })}
    </div>
  );
};

export default StudentsMarks;
