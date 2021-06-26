import React, { useState } from "react";

function Item(props) {
  const [isClick, click] = useState(false);

  function handleClick() {
    click(true);
  }

  return (
    <div
      onClick={handleClick}
      style={{ textDecoration: isClick && "line-through" }}
    >
      <li>{props.item}</li>
    </div>
  );
}

export default Item;
