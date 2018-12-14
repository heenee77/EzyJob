import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUserProvider } from "./IUserProvider";
import { User } from "../../models/user";
import { RequestProvider } from "../request/request";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider implements IUserProvider {
  private requestProvider: RequestProvider;

  /**
   * Creates a user object in the database
   * @param user User data to be created
   */
  async createUser(user: User): Promise<boolean> {
    // throw new Error("Method not implemented.");
    let responseMessage = await this.requestProvider.createData<User>(
      "USER",
      user
    );

    if (responseMessage.Message === "1") return true;
    else return false;
  }

  /**
   * Gets user data from the database
   * @param id User ID
   */
  async getUserData(id: string): Promise<User> {
    // throw new Error("Method not implemented.");
    let responseMessage = await this.requestProvider.getData<User>(
      "USER",
      "id",
      id
    );
    if (responseMessage.Message === "1") {
      return responseMessage.Records[0];
    } else {
      return null;
    }
  }

  /**
   * Updates a User object data in the database
   * @param id User ID
   * @param user Updated User data
   */
  async updateUserData(id: string, user: User): Promise<boolean> {
    // throw new Error("Method not implemented.");
    let responseMessage = await this.requestProvider.updateData<User>(
      "USER",
      "id",
      id,
      user
    );

    if (responseMessage.Message === "1") return true;
    else return false;
  }

  /**
   * Deletes a User object from the database
   * @param id User ID
   */
  async deleteUser(id: string): Promise<boolean> {
    // throw new Error("Method not implemented.");
    let responseMessage = await this.requestProvider.deleteData<User>(
      "USER",
      "id",
      id
    );

    if (responseMessage.Message === "1") return true;
    else return false;
  }

  constructor(public http: HttpClient) {
    console.log("Hello UserProvider Provider");
  }
}
