import { ExampleComment } from "../../models/example";

export interface ICommentsProvider {
    getAllComments(): Promise<ExampleComment[]>;
    getComment(commentId: string): Promise<ExampleComment>;
}