import { Cost } from "./cost";

export interface PO {
    id: string;
    supplierId: string;
    supplierName: string;
    jobId: string;
    jobName: string;
    description: string;
    deliveryAddress: string;
    cost: Cost;
}