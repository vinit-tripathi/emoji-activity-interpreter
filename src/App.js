import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "💃": "woman dancing",
  "🕺": "man dancing",
  "🚶": "person walking",
  "🏃": "person running",
  "⛷️": "skier",
  "🏂": "snowboarder",
  "🤹‍♀️": "woman juggling",
  "🏋": "person lifting weight",
  "🤼‍♂️": "men wrestling",
  "🤸‍♀️": "women cartwheeling",
  "⛹": "person bouncing ball",
  "🤾‍♂️": "man playing handball",
  "🏌": "person golfing",
  "🏇": "horse racing",
  "🧘‍♂️": "man in lotus position",
  "🏄": "person surfing",
  "🏊": "person swimming",
  "🤽‍♂️": "man playing water polo",
  "🚣": "person rowing boat",
  "🧗‍♂️": "man climbing",
  "🚵": "person mountain biking",
  "🤹‍♂️": "man juggling",
  "👯": "people with bunny ears",
  "🏋️‍♀️": "woman lifting weight",
  "🧗‍♀️": "woman climbing"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this emoji. Sorry.";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ padding: "1rem" }}>Activity Emoji Interpreter</h1>
      <h2 style={{ padding: "1rem" }}>
        Enter any emoji or select emoji from the list{" "}
      </h2>
      <input onChange={emojiInputHandler}></input>
      <div className="userOutput">{meaning}</div>

      <h1 style={{ padding: "2rem" }}>Frequently used emojis </h1>
      <div className="emojiOutput">
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                cursor: "pointer"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
          span;
        })}
      </div>
    </div>
  );
}
