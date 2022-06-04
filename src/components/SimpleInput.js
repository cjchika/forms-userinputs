import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputNameTouched, setInputNameTouched] = useState(false)

  const [inputEmail, setInputEmail] = useState("")
  const [inputEmailTouched, setInputEmailTouched] = useState(false)

  const inputNameIsValid = inputName.trim() !== '';
  const nameInputIsInvalid = !inputNameIsValid && inputNameTouched;

  const inputEmailIsValid = inputEmail.includes('@');
  const emailInputIsInvalid = !inputEmailIsValid && inputEmailTouched;

  let formIsValid = false;

    if(inputNameIsValid && inputEmailIsValid) {
      formIsValid = true; 
    } 

  const nameInputChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setInputEmail(event.target.value)
  };

  const nameInputBlurHandler = event => {
    setInputNameTouched(true)
  };

  const emailInputBlurHandler = event => {
    setInputEmailTouched(true)
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setInputNameTouched(true)

    if (!inputNameIsValid) {
      return;
    }

    console.log(inputName);
    console.log(inputEmail);
    setInputName('')
    setInputNameTouched(false)

    setInputEmail('')
    setInputEmailTouched(false)
  };

  const nameInputStyles = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

  const emailInputStyles = emailInputIsInvalid ? 'form-control invalid' : 'form-control'
  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputStyles}>
        <label htmlFor="name">Your Name *</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={inputName}
        />
      </div>
      {nameInputIsInvalid && <p className="error-text">Name cannot be blank</p>}
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
