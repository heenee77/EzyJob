import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JobDetailsPage } from "../job-details/job-details";

/**
 * Generated class for the J01JobNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-j01-job-new',
  templateUrl: 'j01-job-new.html',
})
export class J01JobNewPage {

  plannedJobList: {
    jobNumber: string;
    name: string;
  }[];

  inProgressJobList: {
    jobNumber: string;
    name: string;
  }[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  }
  
  navigateToJobDetailsPage(jobSelection){
    this.navCtrl.setRoot(JobDetailsPage, jobSelection);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad J01JobNewPage');
  }

}
