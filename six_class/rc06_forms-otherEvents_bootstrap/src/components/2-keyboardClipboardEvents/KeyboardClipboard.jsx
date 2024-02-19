import { useState } from "react";

const KeyboardClipboard = () => {

  return (
    <div className="container text-center">
      <h1>CLIPBOARD EVENTS</h1>
      <input
        className="form-control"
        type="text"

      />
      <p
        onCopy={(e) => {
          e.preventDefault();
          alert("you cant copy document");
        }}
        className="text-start mt-4"
      >
    
      </p>

      <textarea
        className="form-control"
        name="area"
        id="area"
        cols="30"
        rows="10"

      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
