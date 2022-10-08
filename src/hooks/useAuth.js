import { useCallback, useState } from "react";
import { postAuth } from "../apis/auth";
import { signInApiUrl, signUpApiUrl } from "../apis/common/apiUrls";
import { useNavigate } from "react-router-dom";
import { setToken } from "../utils/token";

const postAuthSuccess = (response, navigate) => {
  setToken(response.access_token);
  navigate("/todo");
};

export const useAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
      response && postAuthSuccess(response, navigate);
    },
    [email, navigate, password]
  );

  return {
    email,
    password,
    disabled: email.includes("@") && password.length >= 8 ? false : true,
    onChangeInput,
    onClickButton,
  };
};
