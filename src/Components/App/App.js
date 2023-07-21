import React from "react";
import "./App.css";
import ListItem from "../List/ListItem";
import Instruction from "../Instructions/instruction";

function App() {
  const Emojis = [
    {
      name: "Grining Face",
      emoji: "😀",
    },
    {
      name: "Party Popper",
      emoji: "🎉",
    },
    {
      name: "Dancing Lady",
      emoji: "💃",
    },
  ];
  const displayParaProp = false;
  return (
    <div className="container">
      <h1>Hello World !</h1>
      {displayParaProp && <p>Here i am Writing a paragraph </p>}
      <Instruction />

      <ul>
        {Emojis.map((emoji) => (
          <ListItem name={emoji.name} emoji={emoji.emoji} />
        ))}
      </ul>
    </div>
  );
}

export default App;
