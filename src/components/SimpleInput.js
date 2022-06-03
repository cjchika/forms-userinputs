import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [inputName, setInputName] = useState("");

  const nameInputChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log(inputName);
    const enteredVal = nameInputRef.current.value;
    console.log(enteredVal);
    setInputName("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={inputName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
