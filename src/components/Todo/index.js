import { useTodo } from "../../hooks/useTodo";

const Todo = () => {
  const { todos, content, onCreateTodo } = useTodo();

  return (
    <>
      <form onSubmit={onCreateTodo}>
        <input
          type="text"
          placeholder="내용을 입력해주세요."
          value={content.value}
          onChange={content.onChangeInput}
        />
        <button type="submit">추가</button>
      </form>
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
    </>
  );
};

export default Todo;
