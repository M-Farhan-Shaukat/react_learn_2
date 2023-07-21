import React from "react";

function ListItem({ name, emoji }) {
  const DisplayEventOnClick = (event) => alert(event.target.id);
  return (
    <li key={name}>
      {console.log(name, emoji)}
      <button onClick={DisplayEventOnClick}>
        <span role="img" aria-label={name} id={name}>
          {emoji}
        </span>
      </button>
    </li>
  );
}

export default ListItem;
