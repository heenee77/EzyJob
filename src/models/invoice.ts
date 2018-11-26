import { Client } from "./client";
import { Task } from "./task";
import { Cost } from "./cost";

export interface Invoice {
    id: string;
    clientId: string;
    client: Client;
    jobId: string;
    jobName: string;
    Task: Task;
    cost: Cost;
    date: Date;
    dueDate: Date;
    description: string;
}