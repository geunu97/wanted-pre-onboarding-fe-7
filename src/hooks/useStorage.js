import { useEffect, useState } from "react";

export const useLocalStorage = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  const removeItem = (key) => {
    localStorage.removeItem(key);
  };

  return { mount, setItem, getItem, removeItem };
};
