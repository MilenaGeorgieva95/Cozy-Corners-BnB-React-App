import { request } from "../utils/requester";
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
