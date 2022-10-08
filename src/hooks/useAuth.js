import { useCallback } from "react";
import { postAuth } from "../apis/auth";
import { useNavigate } from "react-router-dom";
import { setToken } from "../utils/token";
import { useInput } from "./useInput";

export const useAuth = () => {
  const email = useInput("");
  const password = useInput("");
  const navigate = useNavigate();

  const onSuccessAuth = useCallback(
    (response) => {
      setToken(response.access_token);
      navigate("/todo");
    },
    [navigate]
  );

  const onClickButton = useCallback(
    async (url) => {
      const response = await postAuth({
        url: url,
        data: { email: email.value, password: password.value },
      });
      response && onSuccessAuth(response);
    },
    [email.value, onSuccessAuth, password.value]
  );

  return {
    email,
    password,
    disabled:
      email.value.includes("@") && password.value.length >= 8 ? false : true,
    onClickButton,
  };
};
