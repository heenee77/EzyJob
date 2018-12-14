import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IJobProvider } from "./IJobProvider";
import { Job } from "../../models/job";
import { RequestProvider } from "../request/request";

/*
  Generated class for the JobProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JobProvider implements IJobProvider {
  private requestProvider: RequestProvider;

  /**
   * Creates a Job item in database
   * @param job Jon data to create
   */
  async createJob(job: Job): Promise<boolean> {
    let responseMessage = await this.requestProvider.createData<Job>(
      "JOB",
      job
    );

    if (responseMessage.Message === "1") return true;
    else return false;
  }

  /**
   * Gets a job item from the database
   * @param id Job ID
   */
  async getJob(id: string): Promise<Job[]> {
    let responseMessage = await this.requestProvider.getData<Job>(
      "JOB",
      "id",
      id
    );

    if (responseMessage.Message === "1") {
      return responseMessage.Records;
    } else {
      // throw new Error("Unable to get Job data");
      return null;
    }
  }

  /**
   * Gets all Job items available in database
   */
  async getAllJob(): Promise<Job[]> {
    let responseMessage = await this.requestProvider.getDataList<Job>(
      "JOB",
      "",
      1
    );

    if (responseMessage.Message === "1") {
      return responseMessage.Records;
    } else {
      // throw new Error("Unable to get job data");
      return null;
    }
  }

  /**
   * Updates the data of a job item in database
   * @param id Job ID
   * @param job Updated job data
   */
  async updateJob(id: string, job: Job): Promise<boolean> {
    let responseMessage = await this.requestProvider.updateData<Job>(
      "JOB",
      "id",
      id,
      job
    );

    if (responseMessage.Message === "1") return true;
    else return false;
  }

  /**
   * Deletes a job item from the database
   * @param id Job ID
   */
  async deleteJob(id: string): Promise<boolean> {
    let responseMessage = await this.requestProvider.deleteData<Job>(
      "JOB",
      "id",
      id
    );

    if (responseMessage.Message === "1") return true;
    else return false;
  }

  constructor(public http: HttpClient) {
    console.log("Hello JobProvider Provider");
  }
}
