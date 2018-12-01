import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import { ClientPage } from '../../pages/client/client';
import { BusinessPage } from '../../pages/business/business';
import { ReportPage } from '../../pages/report/report';
import { HomePage } from '../../pages/home/home';
import { JobManagerPage } from '../../pages/job-manager/job-manager';
import { UserDropdownPage } from '../../pages/user-dropdown/user-dropdown';

/**
 * Generated class for the CustomNavbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-navbar',
  templateUrl: 'custom-navbar.html'
})
export class CustomNavbarComponent {
  public pageList = [HomePage, ClientPage, JobManagerPage, BusinessPage, ReportPage];
  text: string;

  constructor(private navCtrl: NavController, public popoverCtrl: PopoverController) {
    console.log('Hello CustomNavbarComponent Component');
    this.text = 'Hello World';
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
