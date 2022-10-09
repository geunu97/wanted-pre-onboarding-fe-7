import { useEditTodo } from "../../hooks/useEditTodo";
import { useTodo } from "../../hooks/useTodo";

const Todo = () => {
  const { todos, content, onCreateTodo, onUpdateTodo } = useTodo();
  const {
    editModeId,
    setEditModeId,
    editContent,
    onChangeEditContent,
    onConvertEditMode,
  } = useEditTodo();

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
                    name="todo"
                    value={editContent.todo}
                    onChange={onChangeEditContent}
                  />
                  <input
                    type="checkbox"
                    name="isCompleted"
                    checked={editContent.isCompleted}
                    onChange={onChangeEditContent}
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
                  {item.todo} {item.isCompleted ? " (완료)" : " (미완료)"}
                  <button onClick={() => onConvertEditMode(item)}>수정</button>
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
