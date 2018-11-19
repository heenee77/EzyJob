import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

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

  jobList: {
    important: boolean;
    jobNumber: string;
    client: string;
    name: string;
    state: string;
    startDate: Date;
    dueDate: Date;
  }[];

  plannedJobList: {
    jobNumber: string;
    name: string;
  }[];

  inProgressJobList: {
    jobNumber: string;
    name: string;
  }[];

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
    ]

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
        state: "planned",
        startDate: new Date(Date.now() - 200000000),
        dueDate: new Date(Date.now())
      },
      {
        important: false,
        jobNumber: "J0000003",
        client: "Eagle",
        name: "Looking Great",
        state: "planned",
        startDate: new Date(Date.now() - 300000000),
        dueDate: new Date(Date.now())
      }
    ];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad JobManagerPage");
  }
}
