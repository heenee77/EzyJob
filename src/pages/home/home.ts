import { Component } from '@angular/core';
import { NavController, IonicPage, PopoverController } from 'ionic-angular';
import { JobDetailsPage } from '../job-details/job-details';
import { ClientPage } from '../client/client';
import { JobPage } from '../job/job';
import { BusinessPage } from '../business/business';
import { ReportPage } from '../report/report';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  jobs: Array<{jobNum: string, jobDesc: string}>;
  pageList = [HomePage, ClientPage, JobPage, BusinessPage, ReportPage];

  constructor(private navCtrl: NavController, public popoverCtrl: PopoverController) {
    this.jobs = [
      {jobNum: "J0001", jobDesc:"Initial Meeting"},
      {jobNum: "J0002", jobDesc:"Planning"},
      {jobNum: "J0003", jobDesc:"Development"}
    ]
  }
  
  itemSelected(jobSelection){
    this.navCtrl.push(JobDetailsPage, jobSelection);
  }

  pageNav(pageNum:number){
    this.navCtrl.push(this.pageList[pageNum]);
  }
}
