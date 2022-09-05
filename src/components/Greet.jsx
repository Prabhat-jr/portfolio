import React from "react";

const Greet = (props) => {
  const { name, ok } = props;
  return (
    <div>
      <h1>
        hello {name} how are you {ok}
      </h1>
      {/* {props.children} */}
    </div>
  );
};

export default Greet;
