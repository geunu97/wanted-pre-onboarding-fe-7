import { useCallback, useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChangeInput = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return {
    value,
    onChangeInput,
  };
};
