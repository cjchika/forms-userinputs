import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputNameTouched, setInputNameTouched] = useState(false)

  const inputNameIsValid = inputName.trim() !== '';
  const nameInputIsInvalid = !inputNameIsValid && inputNameTouched;

  let formIsValid = false;

    if(inputNameIsValid) {
      formIsValid = true; 
    } 

  const nameInputChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setInputNameTouched(true)
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setInputNameTouched(true)

    if (!inputNameIsValid) {
      return;
    }

    console.log(inputName);
    setInputName('')
    setInputNameTouched(false)
  };

  const nameInputStyles = nameInputIsInvalid ? 'form-control invalid' : 'form-control'
  
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
      {nameInputIsInvalid && <p className="error-text">Fill in the space</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
