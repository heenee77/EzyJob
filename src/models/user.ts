import { UserType } from "./userType";

export interface User {
  id: string;
  name: string;
  contact: string;
  email: string;
  userType: UserType;
}
