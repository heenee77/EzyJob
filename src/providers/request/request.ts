import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRequestProvider } from "./IRequestProvider";
import { Config } from '../../config';
import { ResponseMessage } from './responseMessage';

/*
  Generated class for the RequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestProvider implements IRequestProvider {

  tableName = "USER";

  async getDataList<ObjectType>(searchItem: string, pageNumber: number): Promise<ObjectType[]> {
    let url = `${Config.apiUri}readall.php?tbl=${this.tableName}&page=${pageNumber}&search=${searchItem}`;
    let subscribe = this.http.get<ResponseMessage<ObjectType[]>>(url);
    let result = await subscribe.toPromise();
    if (result.Message === "1" && result.Records) {
      return result.Records;
    } else {
      throw new Error("Error requesting");
    }
  }
  async getData<ObjectType>(columnName: string, columnValue: string): Promise<ObjectType[]> {
    let url = `${Config.apiUri}readone.php?tbl=${this.tableName}&item=${columnName}&val=${columnValue}`;
    let subscribe = this.http.get<ResponseMessage<ObjectType[]>>(url);
    let result = await subscribe.toPromise();
    if (result.Message === "1" && result.Records) {
      return result.Records;
    } else {
      throw new Error("Error requesting");
    }
  }
  async createData<ObjectType>(objectData: ObjectType): Promise<boolean> {
    let url = `${Config.apiUri}insert.php?tbl=${this.tableName}`;
    let subscribe = this.http.post<ResponseMessage<void>>(url, objectData);
    let result = await subscribe.toPromise();
    if (result.Message === "1") {
      return true;
    } else {
      return false;
    }
  }
  async updateData<ObjectType>(columnName: string, columnValue: string, objectData: ObjectType): Promise<boolean> {
    let url = `${Config.apiUri}update.php?tbl=${this.tableName}&item=${columnName}&val=${columnValue}`;
    let subscribe = this.http.put<ResponseMessage<void>>(url, objectData);
    let result = await subscribe.toPromise();
    if (result.Message === "1") {
      return true;
    } else {
      return false;
    }
  }
  async deleteData<ObjectType>(columnName: string, columnValue: string): Promise<boolean> {
    let url = `${Config.apiUri}delete.php?tbl=${this.tableName}&item=${columnName}&val=${columnValue}`;
    let subscribe = this.http.delete<ResponseMessage<void>>(url);
    let result = await subscribe.toPromise();
    if (result.Message === "1") {
      return true;
    } else {
      return false;
    }
  }

  constructor(public http: HttpClient) {
    console.log('Hello RequestProvider Provider');
  }

}
