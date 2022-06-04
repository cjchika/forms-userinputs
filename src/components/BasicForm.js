import react, { useState } from "react";
import useInput from "../Hooks/use-input";

const BasicForm = (props) => {
  const {
    value: inputFirstName,
    isValid: inputFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetfirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: inputLastName,
    isValid: inputLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetlastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: inputEmail,
    isValid: inputEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (inputFirstNameIsValid && inputLastNameIsValid && inputEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!inputFirstName || !inputLastName || !inputEmail) {
      return;
    }

    console.log(inputFirstName);
    console.log(inputLastName);
    console.log(inputEmail);

    resetfirstNameInput();
    resetlastNameInput();
    resetEmailInput();
  };

  const firstNameInputStyles = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputStyles = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputStyles = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputStyles}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            value={inputFirstName}
            onBlur={firstNameBlurHandler}
          />
          {firstNameInputHasError && (
            <p className="error-text">Name cannot be blank</p>
          )}
        </div>
        <div className={lastNameInputStyles}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            value={inputLastName}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputHasError && (
            <p className="error-text">Name cannot be blank</p>
          )}
        </div>
      </div>
      <div className={emailInputStyles}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          value={inputEmail}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
            <p className="error-text">Enter a valid email</p>
          )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
