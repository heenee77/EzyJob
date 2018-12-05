import { User } from "../../models/user";

export interface IUserProvider {
    createUser(user: User): Promise<boolean>;
    getUserData(id: string): Promise<User>;
    updateUserData(id: string, user: User): Promise<boolean>;
    deleteUser(id: string): Promise<boolean>;
}