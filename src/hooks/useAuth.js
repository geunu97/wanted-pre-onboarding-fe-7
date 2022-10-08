import { useCallback, useState } from "react";
import { postAuth } from "../apis/auth";
import { signInApiUrl, signUpApiUrl } from "../apis/common/apiUrls";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useStorage";

const postAuthSuccess = (response, localStorage, navigate) => {
  const { mount, setItem } = localStorage;

  navigate("/todo");
  mount && setItem("access_token", response.access_token);
};

export const useAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const localStorage = useLocalStorage();

  const onChangeInput = useCallback((e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  }, []);

  const onClickButton = useCallback(
    async (e) => {
      let apiData = { url: signUpApiUrl, data: { email, password } };

      e.target.name === "login" &&
        (apiData = { ...apiData, url: signInApiUrl });

      const response = await postAuth(apiData);
      response && postAuthSuccess(response, localStorage, navigate);
    },
    [email, localStorage, navigate, password]
  );

  return {
    email,
    password,
    disabled: email.includes("@") && password.length >= 8 ? false : true,
    onChangeInput,
    onClickButton,
  };
};
