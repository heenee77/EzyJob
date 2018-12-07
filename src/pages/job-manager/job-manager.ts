import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { JobDetailsPage } from "../job-details/job-details";

/**
 * Generated class for the JobManagerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-job-manager",
  templateUrl: "job-manager.html"
})
export class JobManagerPage {
  jobSummary: {
    total: number;
    startingToday: number;
    dueThisWeek: number;
    dueNextWeek: number;
    overdue: number;
  };

  jobList: Job[];

  plannedJobList: {
    jobNumber: string;
    name: string;
  }[];

  inProgressJobList: {
    jobNumber: string;
    name: string;
  }[];

  jobFilter: JobFilter;

  filterPressed(filter: string) {
    switch (filter) {
      case JobFilter.archieve: {
        this.jobFilter = JobFilter.archieve;
        break;
      }
      case JobFilter.all: {
        this.jobFilter = JobFilter.all;
        break;
      }
      case JobFilter.importantDates: {
        this.jobFilter = JobFilter.importantDates;
        break;
      }
      case JobFilter.managedBy: {
        this.jobFilter = JobFilter.managedBy;
        break;
      }
      case JobFilter.my: {
        this.jobFilter = JobFilter.my;
        break;
      }
      case JobFilter.recurring: {
        this.jobFilter = JobFilter.recurring;
        break;
      }
      case JobFilter.search: {
        this.jobFilter = JobFilter.search;
        break;
      }
      case JobFilter.staffAllocation: {
        this.jobFilter = JobFilter.staffAllocation;
        break;
      }
      default: {
        console.log("Some stuff is selected, but no match found");
        break;
      }
    }

    console.log("this.jobFilter: ", this.jobFilter);
  }

  sortJobList(
    inputList: Job[],
    sortingProperty: string,
    ascending: boolean
  ): Job[] {
    let propertyList = [
      "important",
      "jobNumber",
      "client",
      "name",
      "state",
      "startDate",
      "dueDate"
    ];

    let stringProperty = ["jobNumber", "client", "name", "state"];

    if (propertyList.indexOf(sortingProperty) <= -1) return inputList;

    let sortedJobList = inputList.sort((itemOne, itemTwo) => {
      let propertyItemOne = itemOne[sortingProperty];
      let propertyItemTwo = itemTwo[sortingProperty];

      if (stringProperty.indexOf(sortingProperty) <= -1) {
        return propertyItemTwo - propertyItemOne;
      } else {
        return (<string>propertyItemOne).localeCompare(<string>propertyItemTwo);
      }
    });

    if (!ascending) {
      sortedJobList = sortedJobList.reverse();
    }

    return sortedJobList;
  }

  navigateToJobDetailsPage(jobNumber: string): void {
    console.log("Navigating to Job Details Page with params: ", { jobNumber });
    this.navCtrl.setRoot(JobDetailsPage, { jobNumber } );
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jobSummary = {
      total: 10,
      startingToday: 3,
      dueThisWeek: 5,
      dueNextWeek: 7,
      overdue: 1
    };

    this.plannedJobList = [
      {
        jobNumber: "J0000001",
        name: "Develop EzJob"
      },
      {
        jobNumber: "J0000003",
        name: "Looking Great"
      }
    ];

    this.inProgressJobList = [
      {
        jobNumber: "J0000002",
        name: "Style EzJob"
      }
    ];

    this.jobList = [
      {
        important: false,
        jobNumber: "J0000001",
        client: "Eagle",
        name: "Develop EzJob",
        state: "planned",
        startDate: new Date(Date.now() - 100000000),
        dueDate: new Date(Date.now())
      },
      {
        important: true,
        jobNumber: "J0000002",
        client: "Hee Nee",
        name: "Style EzJob",
        state: "inProgress",
        startDate: new Date(Date.now() - 200000000),
        dueDate: new Date(Date.now())
      },
      {
        important: false,
        jobNumber: "J0000003",
        client: "Eagle",
        name: "Looking Great",
        state: "resolved",
        startDate: new Date(Date.now() - 300000000),
        dueDate: new Date(Date.now())
      }
    ];

    this.sortJobList(this.jobList, "jobNumber", true);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad JobManagerPage");
  }
}

interface Job {
  important: boolean;
  jobNumber: string;
  client: string;
  name: string;
  state: string;
  startDate: Date;
  dueDate: Date;
}

enum JobFilter {
  all = "all",
  my = "my",
  managedBy = "managedBy",
  importantDates = "importantDates",
  staffAllocation = "staffAllocation",
  search = "search",
  archieve = "archieve",
  recurring = "recurring"
}
