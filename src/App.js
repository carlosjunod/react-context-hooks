import React from "react";
// import JokesContext from "./context/index";
import JokeContextProvider from "./context/JokeContext";
import Joke from "./components/Joke";
import "./App.css";
import NameFormJokes from "./components/NameFormJokes";

function App() {
  return (
    <JokeContextProvider>
      <div className='App'>
        <Joke />
        <NameFormJokes />
      </div>
    </JokeContextProvider>
  );
}

export default App;
