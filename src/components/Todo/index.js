import { useTodo } from "../../hooks/useTodo";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

const Todo = () => {
  const { todos, content, onCreateTodo, onUpdateTodo, onDeleteTodo } =
    useTodo();

  return (
    <>
      <CreateTodo content={content} onCreateTodo={onCreateTodo} />
      <TodoList
        todos={todos}
        onUpdateTodo={onUpdateTodo}
        onDeleteTodo={onDeleteTodo}
      />
    </>
  );
};

export default Todo;
