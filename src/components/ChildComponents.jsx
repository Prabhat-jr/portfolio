import React from "react";
const ChildComponents = (props) => {
  return (
    <div>
      <button onClick={props.greetHandler}>Greet Parent</button>
    </div>
  );
};

export default ChildComponents;
