import React, { useContext } from "react";
import { JokesContext } from "../context/JokeContext";

const Joke = () => {
  const context = useContext(JokesContext);
  return (
    <div>
      <h1>{context.currentJoke && context.currentJoke}</h1>
    </div>
  );
};

export default Joke;
