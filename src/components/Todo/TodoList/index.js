import { useEditTodo } from "../../../hooks/useEditTodo";

const TodoList = ({ todos, onUpdateTodo, onDeleteTodo }) => {
  const {
    editModeId,
    setEditModeId,
    editContent,
    onChangeEditContent,
    onConvertEditMode,
  } = useEditTodo();

  return (
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
                <button onClick={() => onDeleteTodo(item.id)}>삭제</button>
              </span>
            )}
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
