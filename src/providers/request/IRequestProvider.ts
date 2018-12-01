import { ResponseMessage } from "./responseMessage";

export interface IRequestProvider {
  getDataList<ObjectType>(
    tableName: string,
    searchItem: string,
    pageNumber: number
  ): Promise<ResponseMessage<ObjectType>>;

  getData<ObjectType>(
    tableName: string,
    columnName: string,
    columnValue: string
  ): Promise<ResponseMessage<ObjectType>>;

  createData<ObjectType>(
    tableName: string,
    objectData: ObjectType
  ): Promise<ResponseMessage<ObjectType>>;

  updateData<ObjectType>(
    tableName: string,
    columnName: string,
    columnValue: string,
    objectData: ObjectType
  ): Promise<ResponseMessage<ObjectType>>;
  
  deleteData<ObjectType>(
    tableName: string,
    columnName: string,
    columnValue: string
  ): Promise<ResponseMessage<ObjectType>>;
}
