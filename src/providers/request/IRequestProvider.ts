export interface IRequestProvider {
    getDataList<ObjectType>(tableName: string, searchItem: string, pageNumber: number): Promise<ObjectType[]>;
    getData<ObjectType>(tableName: string, columnName: string, columnValue: string): Promise<ObjectType[]>;
    createData<ObjectType>(tableName: string, objectData: ObjectType): Promise<boolean>;
    updateData<ObjectType>(tableName: string, columnName: string, columnValue: string, objectData: ObjectType): Promise<boolean>;
    deleteData<ObjectType>(tableName: string, columnName: string, columnValue: string): Promise<boolean>;
}