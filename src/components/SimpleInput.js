import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [inputName, setInputName] = useState("");
  const [inpurtNameIsValid, setInputNameIsValid] = useState(true)

  const nameInputChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (inputName === '') {
      setInputNameIsValid(false)
      return;
    }

    setInputNameIsValid(true)

    console.log(inputName);
    const enteredVal = nameInputRef.current.value;
    console.log(enteredVal);
    setInputName("");
  };

  const nameInputStyles = inpurtNameIsValid ? 'form-control' : 'form-control invalid'
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputStyles}>
        <label htmlFor="name">Your Name *</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={inputName}
        />
      </div>
      {!inpurtNameIsValid && <p className="error-text">Fill in the space</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
