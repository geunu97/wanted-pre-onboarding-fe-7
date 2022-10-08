import { useCallback, useState } from "react";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  }, []);

  return {
    email,
    password,
    onChange,
    disabled: email.includes("@") && password.length >= 8 ? false : true,
  };
};
