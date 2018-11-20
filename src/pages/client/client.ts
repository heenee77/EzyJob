import { Component } from '@angular/core';
import { NavController, IonicPage, PopoverController } from 'ionic-angular';
import { JobPage } from '../job/job';
import { ReportPage } from '../report/report';
import { BusinessPage } from '../business/business';
import { UserDropdownPage } from '../user-dropdown/user-dropdown';
import { HomePage } from '../home/home';
/**
 * Generated class for the ClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client',
  templateUrl: 'client.html',
})
export class ClientPage {

  public pageList = [HomePage, ClientPage, JobPage, BusinessPage, ReportPage];
  tab1Selected:boolean;
  tab2Selected:boolean;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {
    this.tab1Selected=true;
    this.tab2Selected=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientPage');
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


  tabSel(e){
    if(e=='contacts'){
      this.tab1Selected=false;
      this.tab2Selected=true;
    }
    else if(e=='clients'){
      this.tab1Selected=true;
      this.tab2Selected=false;
    }
  }
}
