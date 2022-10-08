import { useState, useEffect, useCallback } from "react";
import { createTodo } from "../apis/todo";
import { useInput } from "./useInput";
import { getTodos } from "../apis/todo";

export const useTodo = () => {
  const [todos, setTodos] = useState([]);
  const content = useInput("");

  const onGetTodos = useCallback(async () => {
    const response = await getTodos();
    setTodos(response);
  }, []);

  const onCreateTodo = useCallback(
    async (e) => {
      e.preventDefault();
      await createTodo({ todo: content.value });
      onGetTodos();
    },
    [content.value, onGetTodos]
  );

  useEffect(() => {
    onGetTodos();
  }, [onGetTodos]);

  return { todos, content, onCreateTodo };
};
