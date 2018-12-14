import { Job } from "../../models/job";

export interface IJobProvider {
  createJob(job: Job): Promise<boolean>;
  getJob(id: string): Promise<Job[]>;
  getAllJob(): Promise<Job[]>;
  updateJob(id: string, job: Job): Promise<boolean>;
  deleteJob(id: string): Promise<boolean>;
}
