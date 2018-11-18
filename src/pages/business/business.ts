import { Component } from '@angular/core';
import { NavController, IonicPage, PopoverController } from 'ionic-angular';
import { ClientPage } from '../client/client';
import { JobPage } from '../job/job';
import { ReportPage } from '../report/report';
import { UserDropdownPage } from '../user-dropdown/user-dropdown';
import { HomePage } from '../home/home';
/**
 * Generated class for the BusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@IonicPage()
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {

  public pageList = [HomePage, ClientPage, JobPage, BusinessPage, ReportPage];

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessPage');
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
