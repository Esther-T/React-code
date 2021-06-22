import React from "react";
import Card from "./Card";
import emojis from "../emojipedia.js"

function createCard(emoji){
  return(<Card
    key={emoji.id}
    name={emoji.name}
    emoji={emoji.emoji}
    meaning={emoji.meaning}
    />);
}

const testEmoji = emojis.map(function(emoji){
  return emoji.meaning.substring(0,100);
});

console.log(testEmoji);

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojis.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
