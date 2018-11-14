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
  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;
  tab5: any;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {
    this.jobs = [
      {jobNum: "J0001", jobDesc:"Initial Meeting"},
      {jobNum: "J0002", jobDesc:"Planning"},
      {jobNum: "J0003", jobDesc:"Development"}
    ]

    this.tab1 = HomePage;
    this.tab2 = ClientPage;
    this.tab3 = JobPage;
    this.tab4 = BusinessPage;
    this.tab5 = ReportPage;
  }
  
  itemSelected(jobSelection){
    this.navCtrl.push(JobDetailsPage, jobSelection);
  }

  pageNav(targetPage:any){
    this.navCtrl.setRoot(targetPage);
  }
}
