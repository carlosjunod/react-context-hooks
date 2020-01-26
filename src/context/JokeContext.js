import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const defaultValue = {
  currentJoke: {
    id: null,
    joke: "",
    categories: []
  },
  setNewJoke: () => {}
};

// context
export const JokesContext = createContext(defaultValue);

// side effects / async actions
export const getNewJoke = async ({ name, lastname }) => {
  let url = "http://api.icndb.com/jokes/random";
  if (name && lastname) {
    url = `http://api.icndb.com/jokes/random?firstName=${name}&lastName=${lastname}`;
  }
  const resp = await axios.get(url);
  return resp.data.value.joke;
};

// *************//
// HOC provider //
// *************//
const JokeContextProvider = props => {
  const [joke, setJoke] = useState("");

  // get default state
  useEffect(() => {
    async function fetchData() {
      const joke = await getNewJoke({});
      setJoke(joke);
    }
    fetchData();
  }, []);

  // create action handlers
  const onClick = async ({ name, lastname }) => {
    setJoke(await getNewJoke({ name, lastname }));
  };

  // provider feed by the state / actions
  return (
    <JokesContext.Provider
      value={{
        currentJoke: joke,
        setNewJoke: onClick
      }}
    >
      {props.children}
    </JokesContext.Provider>
  );
};

export default JokeContextProvider;
