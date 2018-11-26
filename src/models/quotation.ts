import { Cost } from "./cost";
import { Task } from "./task";

export interface Quotation {
    id: string;
    clientId: string;
    quoteName: string;
    description: string;
    issueDate: Date;
    validDate: Date;
    task: Task;
    cost: Cost;
    subTotal: number;
    tax: number;
    total: number;
}