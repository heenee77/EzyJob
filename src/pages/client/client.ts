import { Component } from '@angular/core';
import { NavController, IonicPage, PopoverController } from 'ionic-angular';
import { JobPage } from '../job/job';
import { ReportPage } from '../report/report';
import { BusinessPage } from '../business/business';
import { UserDropdownPage } from '../user-dropdown/user-dropdown';
import { HomePage } from '../home/home';
import { C01ClientInfoPage } from '../c01-client-info/c01-client-info';
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
  public tab1Selected: boolean;
  public tab2Selected: boolean;
  public selectAllChecked = false;
  private rows: Array<{name: string, phone: string, address: string, checked: boolean}> = [
    { 
      name: "Client 1",
      phone: "+60123456789",
      address: "1, Friar's Lane",
      checked: false
    },
    {
      name: "Client 2",
      phone: "+60129876543",
      address: "2, Friar's Lane",
      checked: false
    },
    {
      name: "Client 1",
      phone: "+60185432789",
      address: "3, Friar's Lane",
      checked: false
    }
  ];

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

  clientSelected(clientSelection){
    this.navCtrl.push(C01ClientInfoPage, clientSelection);
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

  selectAll(){
    if (this.selectAllChecked) {
      this.rows.map(rows => rows.checked = true);
    } 
    else {
        this.rows.map(rows => rows.checked = false);
    }
  }
}
