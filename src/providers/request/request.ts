import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IRequestProvider } from "./IRequestProvider";
import { Config } from "../../config";
import { ResponseMessage } from "./responseMessage";

/*
  Generated class for the RequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestProvider implements IRequestProvider {
  /**
   * Sends a GET Request to the server and get all data based on the search keyword
   * @param tableName Table Name of the database
   * @param searchItem Search keyword
   * @param pageNumber Page number of the search result
   */
  async getDataList<ObjectType>(
    tableName: string,
    searchItem: string,
    pageNumber: number
  ): Promise<ResponseMessage<ObjectType>> {
    let url = `${
      Config.apiUri
    }readall.php?tbl=${tableName}&page=${pageNumber}&search=${searchItem}`;

    let subscribe = this.http.get<ResponseMessage<ObjectType>>(url);
    return await subscribe.toPromise();
  }

  /**
   * Sends a GET request to database and get a single data
   * @param tableName Table name of the database
   * @param columnName Property/Column name to search
   * @param columnValue Value of the Property/Co;umn to search
   */
  async getData<ObjectType>(
    tableName: string,
    columnName: string,
    columnValue: string
  ): Promise<ResponseMessage<ObjectType>> {
    let url = `${
      Config.apiUri
    }readone.php?tbl=${tableName}&item=${columnName}&val=${columnValue}`;

    let subscribe = this.http.get<ResponseMessage<ObjectType>>(url);
    return await subscribe.toPromise();
  }

  /**
   * Sends a POST request to the server to create a data object
   * @param tableName Table name of the database
   * @param objectData Item to create in the database
   */
  async createData<ObjectType>(
    tableName: string,
    objectData: ObjectType
  ): Promise<ResponseMessage<ObjectType>> {
    let url = `${Config.apiUri}insert.php?tbl=${tableName}`;
    let subscribe = this.http.post<ResponseMessage<ObjectType>>(
      url,
      objectData
    );

    return await subscribe.toPromise();
  }

  /**
   * Sends a PUT request to update server data
   * @param tableName Table name of the database
   * @param columnName Property/Column name to search
   * @param columnValue Property/Column value to search
   * @param objectData Updated version of the data
   */
  async updateData<ObjectType>(
    tableName: string,
    columnName: string,
    columnValue: string,
    objectData: ObjectType
  ): Promise<ResponseMessage<ObjectType>> {
    let url = `${
      Config.apiUri
    }update.php?tbl=${tableName}&item=${columnName}&val=${columnValue}`;
    let subscribe = this.http.put<ResponseMessage<ObjectType>>(url, objectData);

    return await subscribe.toPromise();
  }

  /**
   * Sends a DELETE request to delete a data from server
   * @param tableName Table name of the database
   * @param columnName Property/Column name to search
   * @param columnValue Property/Column value to search
   */
  async deleteData<ObjectType>(
    tableName: string,
    columnName: string,
    columnValue: string
  ): Promise<ResponseMessage<ObjectType>> {
    let url = `${
      Config.apiUri
    }delete.php?tbl=${tableName}&item=${columnName}&val=${columnValue}`;

    let subscribe = this.http.delete<ResponseMessage<ObjectType>>(url);

    return await subscribe.toPromise();
  }

  constructor(public http: HttpClient) {
    console.log("Hello RequestProvider Provider");
  }
}
