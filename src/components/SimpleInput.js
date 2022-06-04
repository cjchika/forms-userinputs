import { useEffect, useState } from "react";

import useInput from "../Hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: inputName,
    isValid: inputNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const [inputEmail, setInputEmail] = useState("");
  const [inputEmailTouched, setInputEmailTouched] = useState(false);

  const inputEmailIsValid = inputEmail.includes("@");
  const emailInputIsInvalid = !inputEmailIsValid && inputEmailTouched;

  let formIsValid = false;

  if (inputNameIsValid && inputEmailIsValid) {
    formIsValid = true;
  }

  const emailInputChangeHandler = (event) => {
    setInputEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setInputEmailTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!inputNameIsValid) {
      return;
    }

    console.log(inputName);
    console.log(inputEmail);
    resetNameInput();

    setInputEmail("");
    setInputEmailTouched(false);
  };

  const nameInputStyles = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputStyles = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputStyles}>
        <label htmlFor="name">Your Name *</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={inputName}
        />
      </div>
      {nameInputHasError && <p className="error-text">Name cannot be blank</p>}
      <div className={emailInputStyles}>
        <label htmlFor="name">Your E-mail*</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={inputEmail}
        />
      </div>
      {emailInputIsInvalid && <p className="error-text">Incorrect email</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
