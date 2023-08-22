import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import {
  AuthContextTypes,
  MyTokens,
  UserTypeLogin,
  UserTypeRegister,
} from "./types";
import axios from "axios";
import { ADMINS, API_BACKEND } from "../../utils/consts";
import $axios from "../../utils/axios";

const authContext = createContext<AuthContextTypes | null>(null);

export function useAuthContext(): AuthContextTypes {
  return useContext(authContext) as AuthContextTypes;
}

interface AuthContextProps {
  children: ReactNode;
}
const AuthContext: FC<AuthContextProps> = ({ children }) => {
  const [user, setUser] = useState(null);

  async function signup(credentials: UserTypeRegister) {
    try {
      await axios.post<MyTokens>(
        `${API_BACKEND}/account/register/`,
        credentials
      );
    } catch (e) {
      console.log(e, "signup");
    }
  }

  async function login(credentials: UserTypeLogin) {
    try {
      const { data: tokens } = await axios.post<MyTokens>(
        `${API_BACKEND}/account/login/`,
        credentials
      );
      localStorage.setItem("mytokens", JSON.stringify(tokens));

      const { data } = await $axios.get(`${API_BACKEND}/account/profile/`);
      setUser(data);
    } catch (e) {
      console.log(e, "login");
    }
  }

  function logout() {
    localStorage.removeItem("mytokens");
    setUser(null);
  }

  async function checkAuth() {
    try {
      const tokens = JSON.parse(localStorage.getItem("mytokens") as string);
      if (tokens) {
        const { data } = await $axios.get(`${API_BACKEND}/account/profile/`);
        setUser(data);
      }
    } catch (e) {
      console.log(e, "checkAuth");
    }
  }

  function isAdmin() {
    if (!user) {
      return false;
    }

    return ADMINS.includes((user as { email: string }).email);
  }

  const value = {
    user,
    signup,
    login,
    logout,
    checkAuth,
    isAdmin,
  };
  return <authContext.Provider value={value}>{children} </authContext.Provider>;
};

export default AuthContext;
