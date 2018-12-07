import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JobManagerPage } from '../job-manager/job-manager';

/**
 * Generated class for the JobDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-details',
  templateUrl: 'job-details.html',
})
export class JobDetailsPage {

  private tasks: Array<{name: string, startDate: Date, dueDate: Date, estimate: number, actual: number, remaining: number}> = [
    {
      name: "Apprentice",
      startDate: new Date("12 Dec 2018"),
      dueDate: new Date("13 Dec 2018"),
      estimate: 0.00,
      actual: 0.00,
      remaining: 0.00 
    },
    {
      name: "Builder",
      startDate: new Date("25 Dec 2018"),
      dueDate: new Date("31 Dec 2018"),
      estimate: 0.00,
      actual: 0.00,
      remaining:  0.00
    },
    {
      name: "Master Builder",
      startDate: new Date("1 Jan 2019"),
      dueDate: new Date("14 Jan 2019"),
      estimate: 0.00,
      actual: 0.00,
      remaining:  0.00
    }
  ]

  param: {
    jobNumber: string
  };

  calendarConfig: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.param = navParams.data;
    this.calendarConfig = {
      currentDate: new Date(Date.now()),
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobDetailsPage');
  }

  navigateToJobManagerPage(){
    this.navCtrl.setRoot(JobManagerPage);
  }
}
