import { useState } from "react";
import { useTodo } from "../../hooks/useTodo";

const Todo = () => {
  const { todos, content, onCreateTodo } = useTodo();
  const [editMode, setEditMode] = useState(false);

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
              <span>
                {item.todo} {item.isCompleted ? " O" : " X"}
              </span>
              {editMode ? (
                <span>
                  <button>제출</button>
                  <button onClick={() => setEditMode(false)}>취소</button>
                </span>
              ) : (
                <span>
                  <button onClick={() => setEditMode(true)}>수정</button>
                  <button>삭제</button>
                </span>
              )}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Todo;
