import { useEffect, useState } from "react";
import { getTodos } from "../apis/todo";

export const useGetTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const onGetTodos = async () => {
      const response = await getTodos();
      setTodos(response);
    };
    onGetTodos();
  }, []);

  return todos;
};
