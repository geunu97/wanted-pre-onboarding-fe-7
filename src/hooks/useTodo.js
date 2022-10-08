import { useState, useEffect, useCallback } from "react";
import { createTodo, getTodos, updateTodo } from "../apis/todo";
import { useInput } from "./useInput";

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

  const onUpdateTodo = useCallback(
    async (id, todo, isCompleted) => {
      await updateTodo(id, { todo: todo, isCompleted: isCompleted });
      onGetTodos();
    },
    [onGetTodos]
  );

  useEffect(() => {
    onGetTodos();
  }, [onGetTodos]);

  return { todos, content, onCreateTodo, onUpdateTodo };
};
