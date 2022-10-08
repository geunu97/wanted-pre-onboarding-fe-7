import { createTodo } from "../apis/todo";
import { useInput } from "./useInput";

export const useTodo = () => {
  const content = useInput("");

  const onSubmitTodo = (e) => {
    e.preventDefault();
    createTodo({ todo: content.value });
  };

  return { content, onSubmitTodo };
};
