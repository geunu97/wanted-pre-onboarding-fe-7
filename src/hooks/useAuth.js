import { useCallback } from "react";
import { postAuth } from "../apis/auth";
import { signInApiUrl, signUpApiUrl } from "../apis/common/apiUrls";
import { useNavigate } from "react-router-dom";
import { setToken } from "../utils/token";
import { useInput } from "./useInput";

const postAuthSuccess = (response, navigate) => {
  setToken(response.access_token);
  navigate("/todo");
};

export const useAuth = () => {
  const email = useInput("");
  const password = useInput("");
  const navigate = useNavigate();

  const onClickButton = useCallback(
    async (e) => {
      let apiData = {
        url: signUpApiUrl,
        data: { email: email.value, password: password.value },
      };

      e.target.name === "login" &&
        (apiData = { ...apiData, url: signInApiUrl });

      const response = await postAuth(apiData);
      response && postAuthSuccess(response, navigate);
    },
    [email.value, navigate, password.value]
  );

  return {
    email,
    password,
    disabled:
      email.value.includes("@") && password.value.length >= 8 ? false : true,
    onClickButton,
  };
};
