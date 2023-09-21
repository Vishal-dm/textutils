import React, { useState } from "react";
import "../Styles/TextForm.css";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handlelowClick = () => {
    // console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("lowercase was clicked" + text);
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBOX");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>Enter the Text below:</h1>
        <div className="mb-3">
          <textarea clayboxsname="form-control" value={text} id="myBOX" cols="100" rows="8" onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn primary mx-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn primary mx-1" onClick={handlelowClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn primary mx-1" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn primary mx-1" onClick={removeExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h3>Your Text Summary:</h3>
        <p>
          {text.split(" ").length} Words & {text.length} characters
        </p>
        <p>Reading Time:{0.008 * text.split(" ").length} Minutes</p>
        <h3>Preview:</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
