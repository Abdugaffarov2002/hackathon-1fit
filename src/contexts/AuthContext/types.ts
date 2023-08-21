import { UserType } from "../../models/users";

export interface IAuthContextTypes {
  user: UserType | null;
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
