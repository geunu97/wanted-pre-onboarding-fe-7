import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getToken } from "../utils/token";

export const useRedirect = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { accessToken } = getToken();

  useEffect(() => {
    pathname === "/" && accessToken && navigate("/todo");
    pathname === "/todo" && !accessToken && navigate("/");
  });
};
