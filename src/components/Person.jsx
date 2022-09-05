import React from "react";

const Person = ({ person }) => {
  console.log(person);
  return (
    <div>
      <h1>
        I am {person.name}. I am {person.age} year old. I am know {person.skill}
      </h1>
    </div>
  );
};

export default Person;
