import { useTodo } from "../../hooks/useTodo";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

const Todo = () => {
  const { todos, content, onCreateTodo, onUpdateTodo } = useTodo();

  return (
    <>
      <CreateTodo content={content} onCreateTodo={onCreateTodo} />
      <TodoList todos={todos} onUpdateTodo={onUpdateTodo} />
    </>
  );
};

export default Todo;
