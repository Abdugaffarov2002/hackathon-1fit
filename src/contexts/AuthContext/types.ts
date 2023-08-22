import { UserType } from "../../models/users";

export interface AuthContextTypes {
  user: UserType | null;
  signup: (credentials: UserTypeRegister) => void;
  login: (credentials: UserTypeLogin) => void;
  logout: () => void;
  checkAuth: () => void;
}

export interface UserTypeLogin {
  email: string;
  password: string;
}

export interface UserTypeRegister extends UserTypeLogin {
  password_confirm: string;
}

export interface MyTokens {
  access: string;
  refresh: string;
}
