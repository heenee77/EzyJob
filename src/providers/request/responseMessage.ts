export interface ResponseMessage<ObjectType> {
  Message: string;
  TotalData?: number;
  RxData?: number;
  Records?: ObjectType[];
}
