import { useEffect, useState } from "react";
import axios from "axios";

export const getNewJoke = async ({ name, lastname }) => {
  console.log("here!!!!!", { name, lastname });
  let url = "http://api.icndb.com/jokes/random";
  if (name && lastname) {
    url = `http://api.icndb.com/jokes/random?firstName=${name}&lastName=${lastname}`;
  }
  const resp = await axios.get(url);
  return resp.data.value.joke;
};

export function useFetchJoke({ name, lastname }) {
  console.log("here", name, lastname);
  const [joke, setJoke] = useState({});

  let url = "http://api.icndb.com/jokes/random";
  if (name && lastname) {
    url = `http://api.icndb.com/jokes/random?firstName=${name}&amp;lastName=${lastname}`;
  }
  async function fetchJoke() {
    const resp = await axios.get(url);
    setJoke(resp.data.value);
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return joke;
}
