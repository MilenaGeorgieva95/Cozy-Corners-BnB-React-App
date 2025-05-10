import { useContext, useEffect, useState } from "react";
import { request } from "../utils/requester";
import { UserContext } from "../components/contexts/UserContext";
const baseUrl = "/users";

export const useLogin = () => {
  const login = async (email, password) => {
    const loginData = await request.post(`${baseUrl}/login`, {
      email,
      password,
    });
    return loginData;
  };

  return {
    login,
  };
};

export const useRegister = () => {
  const register = async (username, email, password) => {
    const registerData = await request.post(`${baseUrl}/register`, {
      username,
      email,
      password,
    });
    return registerData;
  };
  return {
    register,
  };
};

export const useLogout = () => {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    if (!user) {
      return;
    }
    try {
      request.get(`${baseUrl}/logout`, null, accessToken);
    } catch (error) {
      console.log(error);
    } finally {
      setUser("");
    }
  }, [user]);
};
