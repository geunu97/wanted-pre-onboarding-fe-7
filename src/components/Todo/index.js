import { useGetTodos } from "../../hooks/useGetTodos";

const Todo = () => {
  const todos = useGetTodos();

  return (
    <ul>
      {todos &&
        todos.map((item) => (
          <li key={item.id}>
            <span>{item.id}</span>
            <span>{item.todo}</span>
            <span>{item.isCompleted ? "true" : "false"}</span>
            <span>{item.userId}</span>
          </li>
        ))}
    </ul>
  );
};

export default Todo;
