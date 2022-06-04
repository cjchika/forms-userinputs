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

  const { 
    value: inputEmail, 
    isValid: inputEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));

  let formIsValid = false;

  if (inputNameIsValid && inputEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!inputNameIsValid) {
      return;
    }

    console.log(inputName);
    console.log(inputEmail);
    resetNameInput();

    resetEmailInput();
  };

  const nameInputStyles = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputStyles = emailInputHasError
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
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={inputEmail}
        />
      </div>
      {emailInputHasError && <p className="error-text">Incorrect email</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
