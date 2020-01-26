import React from "react";

const defaultValue = {
  currentJoke: {
    id: null,
    joke: "",
    categories: []
  },
  setNewJoke: () => {}
};

const JokesContext = React.createContext(defaultValue);

export default JokesContext;
