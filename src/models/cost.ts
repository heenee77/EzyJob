export interface Cost {
    id: string;
    description: string;
    quantity: number;
    unitCost: number;
    tax: number;
    jobId: string;
}