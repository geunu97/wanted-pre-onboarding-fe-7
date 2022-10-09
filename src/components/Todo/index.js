import { useState } from "react";
import { useTodo } from "../../hooks/useTodo";

const Todo = () => {
  const { todos, content, onCreateTodo, onUpdateTodo } = useTodo();
  const [editModeId, setEditModeId] = useState(-1);
  const [editContent, setEditContent] = useState({
    todo: "",
    isCompleted: false,
  });

  const onEdit = ({ id, isCompleted, todo }) => {
    setEditModeId(id);
    setEditContent({ todo: todo, isCompleted: isCompleted });
  };

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
              {editModeId === item.id ? (
                <span>
                  <input
                    type="text"
                    value={editContent.todo}
                    onChange={(e) =>
                      setEditContent({ ...editContent, todo: e.target.value })
                    }
                  />
                  <input
                    type="checkbox"
                    checked={editContent.isCompleted}
                    onChange={(e) =>
                      setEditContent({
                        ...editContent,
                        isCompleted: e.target.checked,
                      })
                    }
                  />
                  <span onClick={() => setEditModeId(-1)}>
                    <button onClick={() => onUpdateTodo(item.id, editContent)}>
                      제출
                    </button>
                    <button>취소</button>
                  </span>
                </span>
              ) : (
                <span>
                  {item.todo} {item.isCompleted ? " O" : " X"}
                  <button onClick={() => onEdit(item)}>수정</button>
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
