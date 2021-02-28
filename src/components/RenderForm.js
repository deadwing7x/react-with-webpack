import React, { useState } from "react";
import "../styles/RenderForm.css";

const RenderForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hasValue, setHasValue] = useState(false);

  const handleNameChange = (event) => {
    setHasValue(false);
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setHasValue(false);
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email) {
      setHasValue(true);
    }
  };

  return (
    <>
      <label>
        <h3>Input Form</h3>
      </label>
      <form className="input-form">
        <div>
          <label>Enter your name:</label>
          <input
            className="input-fields"
            type="text"
            placeholder="Name..."
            max-length="100"
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label>Enter your email:</label>
          <input
            className="input-fields"
            type="email"
            placeholder="Email..."
            max-length="100"
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <input type="submit" onClick={handleSubmit} />
        </div>
      </form>
      {hasValue ? (
        <div>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default RenderForm;
