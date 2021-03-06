import { Component } from '@angular/core';
import { NavController, IonicPage, PopoverController } from 'ionic-angular';
import { ClientPage } from '../client/client';
import { ReportPage } from '../report/report';
import { BusinessPage } from '../business/business';
import { UserDropdownPage } from '../user-dropdown/user-dropdown';
import { HomePage } from '../home/home';
/**
 * Generated class for the JobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job',
  templateUrl: 'job.html',
})
export class JobPage {

  public pageList = [HomePage, ClientPage, JobPage, BusinessPage, ReportPage];

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobPage');
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
