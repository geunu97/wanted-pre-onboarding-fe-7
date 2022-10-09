import { useCallback, useState } from "react";

export const useEditTodo = () => {
  const [editModeId, setEditModeId] = useState(-1);
  const [editContent, setEditContent] = useState({
    todo: "",
    isCompleted: false,
  });

  const onChangeEditContent = useCallback(
    (e) => {
      const { name, value, checked } = e.target;
      name === "todo"
        ? setEditContent({ ...editContent, todo: value })
        : setEditContent({
            ...editContent,
            isCompleted: checked,
          });
    },
    [editContent]
  );

  const onConvertEditMode = useCallback(({ id, isCompleted, todo }) => {
    setEditModeId(id);
    setEditContent({ todo: todo, isCompleted: isCompleted });
  }, []);

  return {
    editModeId,
    setEditModeId,
    editContent,
    onChangeEditContent,
    onConvertEditMode,
  };
};
