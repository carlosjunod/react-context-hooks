import React, { useState, useContext } from "react";
import { JokesContext } from "../context/JokeContext";

const NameFormJokes = () => {
  const [state, setState] = useState({ name: "", lastname: "" });
  const context = useContext(JokesContext);

  function onChangeHandler(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div>
      <input
        onChange={onChangeHandler}
        type='text'
        placeholder='Name'
        name='name'
        value={state.name}
      />
      <input
        onChange={onChangeHandler}
        type='text'
        placeholder='Lastname'
        name='lastname'
        value={state.lastname}
      />
      <button
        onClick={() =>
          context.setNewJoke({ name: state.name, lastname: state.lastname })
        }
      >
        create a joke
      </button>
    </div>
  );
};

export default NameFormJokes;
