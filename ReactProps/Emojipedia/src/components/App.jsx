import React from "react";
import Card from "./Card";
import emojis from "../emojipedia.js"


const testEmoji = emojis.map(emoji => emoji.meaning.substring(0,100));

console.log(testEmoji);

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojis.map(emoji =>(
            <Card
            key={emoji.id}
            name={emoji.name}
            emoji={emoji.emoji}
            meaning={emoji.meaning}
            />))}
      </dl>
    </div>
  );
}

export default App;
