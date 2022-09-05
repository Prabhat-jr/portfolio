import React from "react";
import Person from "./Person";
const NameList = () => {
  const persons = [
    {
      id: 1,
      name: "Anupam",
      age: 17,
      skill: "React",
    },
    {
      id: 1,
      name: "Abhishek",
      age: 19,
      skill: "React",
    },
    {
      id: 1,
      name: "Alok",
      age: 23,
      skill: "React",
    },
    {
      id: 1,
      name: "Amit",
      age: 30,
      skill: "React",
    },
  ];
  const personList = persons.map((person) => <Person person={person} />);
  return <div>{personList}</div>;
};

export default NameList;
