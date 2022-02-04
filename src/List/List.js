import React from "react";

const List = (props) => {
  return (
    <div>
      <ul>
        <li> Producto : {props.product} ✔️</li>
      </ul>
    </div>
  );
};

export default List;
