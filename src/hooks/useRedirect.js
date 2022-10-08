import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useStorage";

export const useRedirect = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    pathname === "/" && getItem("access_token") && navigate("/todo");
    pathname === "/todo" && !getItem("access_token") && navigate("/");
  });
};
