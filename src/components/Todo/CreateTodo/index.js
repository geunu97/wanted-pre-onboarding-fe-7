const CreateTodo = ({ content, onCreateTodo }) => {
  return (
    <form onSubmit={onCreateTodo}>
      <input
        type="text"
        placeholder="내용을 입력해주세요."
        value={content.value}
        onChange={content.onChangeInput}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default CreateTodo;
