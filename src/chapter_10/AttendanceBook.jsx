import React from 'react';

const students = [
  {
    id: 1,
    name: "you jung",
  },
  {
    id: 2,
    name: "steve",
  },
  {
    id: 3,
    name: "Bill",
  },
  {
    id: 4,
    name: "Jeff",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;