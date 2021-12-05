import React from "react";

export default function Props() {
  const itemOne = "First props";
  const itemTwo = "Second props";

  const DisplayProps = (props) => {
    return (
      <div>
        {props.one}
        {props.two}
      </div>
    );
  };

  return (
    <div>
      <DisplayProps one={itemOne} two={itemTwo} />
    </div>
  );
}
