import { Client } from "./client";

export interface Job {
    id: string;
    clientId: string;
    client: Client;
    jobName: string;
    description: string;
    budget: number;
    state: string;
    startDate: Date;
    dueDate: Date;
    manager: string;
}