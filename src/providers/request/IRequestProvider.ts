export interface IRequestProvider {
    getDataList<ObjectType>(searchItem: string, pageNumber: number): Promise<ObjectType[]>;
    getData<ObjectType>(columnName: string, columnValue: string): Promise<ObjectType[]>;
    createData<ObjectType>(objectData: ObjectType): Promise<boolean>;
    updateData<ObjectType>(columnName: string, columnValue: string, objectData: ObjectType): Promise<boolean>;
    deleteData<ObjectType>(columnName: string, columnValue: string): Promise<boolean>;
}