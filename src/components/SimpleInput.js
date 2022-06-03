import { useRef, useState, useEffect } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [inputName, setInputName] = useState("");
  const [inputNameIsValid, setInputNameIsValid] = useState(false)
  const [inputNameTouched, setInputNameTouched] = useState(false)

  useEffect(() => {
    if(inputNameIsValid) {
      console.log('Opor');
    }
  }, [inputNameIsValid])

  const nameInputChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setInputNameTouched(true)

    if (inputName.trim() === '') {
      setInputNameIsValid(false)
      return;
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setInputNameTouched(true)

    if (inputName.trim() === '') {
      setInputNameIsValid(false)
      return;
    }

    setInputNameIsValid(true)

    console.log(inputName);
    const enteredVal = nameInputRef.current.value;
    console.log(enteredVal);
    setInputName("");
  };

  const nameInputIsInvalid = !inputNameIsValid && inputNameTouched;

  const nameInputStyles = nameInputIsInvalid ? 'form-control invalid' : 'form-control'
  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputStyles}>
        <label htmlFor="name">Your Name *</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={inputName}
        />
      </div>
      {nameInputIsInvalid && <p className="error-text">Fill in the space</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
