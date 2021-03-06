import { Component } from '@angular/core';
import { NavController, IonicPage, PopoverController } from 'ionic-angular';
import { JobDetailsPage } from '../job-details/job-details';
import { ClientPage } from '../client/client';
import { JobPage } from '../job/job';
import { BusinessPage } from '../business/business';
import { ReportPage } from '../report/report';
import { UserDropdownPage } from '../user-dropdown/user-dropdown';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  jobs: Array<{jobNum: string, jobDesc: string}>;
  public pageList = [HomePage, ClientPage, JobPage, BusinessPage, ReportPage];

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
    this.navCtrl.setRoot(this.pageList[pageNum]);
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(UserDropdownPage);
    popover.present({
      ev: myEvent
    });
  }
}
