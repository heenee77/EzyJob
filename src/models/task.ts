export interface Task {
    id: string;
    jobId: string;
    jobName: string;
    taskName: string;
    estTime: number;
    description: string;
    startDate: Date;
    dueDate: Date;
    staff: string
}