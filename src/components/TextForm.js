import React, { useState } from "react";
import "../Styles/TextForm.css";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText (newText);
  };
  const handlelowClick = () => {
    // console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText (newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value)
  };
  const [text, setText] = useState("");

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          clayboxsname="form-control"
          value={text}
          id="myBOX"
          cols="100"
          rows="8"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn primary mx-1"  onClick={handleUpClick}>
        Convert To Uppercase
      </button>
      <button className="btn btn primary mx-1"  onClick={handlelowClick}>
        Convert To Lowercase
      </button>
    </div>
    <div className="container my-3">
      <h3>Your Text Summary:</h3>
      <p>
        {text.split(" ").length} Words & {text.length} characters
      </p>
      <p>
        Reading Time:{0.008 * text.split(" ").length} Minutes
      </p>
      <h3>Preview:</h3>
      <p>{text}</p>
    </div>
    </>
  );
}