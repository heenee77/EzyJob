import { Component } from '@angular/core';
import { NavController, IonicPage, PopoverController } from 'ionic-angular';
import { ClientPage } from '../client/client';
import { JobPage } from '../job/job';
import { ReportPage } from '../report/report';
import { HomePage } from '../home/home';
import { B01QuoteDropdownPage } from '../b01-quote-dropdown/b01-quote-dropdown';
import { B02NewDropdownPage } from '../b02-new-dropdown/b02-new-dropdown';
import { B03QuoteInfoPage } from '../b03-quote-info/b03-quote-info';
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
  public tab1Selected: boolean;
  public tab2Selected: boolean;
  public tab3Selected: boolean;
  public tab4Selected: boolean;
  public selectAllChecked = false;
  private rows: Array<{number: string, name: string, clientName: string, state: string, validity: Date, amount: number, checked: boolean}> = [
    {
      number: "Q0001",
      name: "Standard",
      clientName: "Client 1",
      state: "Issued",
      validity: new Date('December 20, 2018'),
      amount: 200.00,
      checked: false
    },
    {
      number: "Q0002",
      name: "Standard",
      clientName: "Client 2",
      state: "Issued",
      validity: new Date('December 18, 2018'),
      amount: 400.00,
      checked: false
    }
  ]
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {
    this.tab1Selected=true;
    this.tab2Selected=false;
    this.tab3Selected=false;
    this.tab4Selected=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessPage');
  }

  pageNav(pageNum:number){
    this.navCtrl.setRoot(this.pageList[pageNum]);
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(B01QuoteDropdownPage);
    popover.present({
      ev: myEvent
    });
  }

  NewQuoteButton(selection) {
    let popover = this.popoverCtrl.create(B02NewDropdownPage);
    popover.present({
      ev: selection
    });
  }
  
  quoteSelected(quoteSelection){
    this.navCtrl.setRoot(B03QuoteInfoPage,quoteSelection);
  }

  tabSel(e){
    if(e=='all'){
      this.tab1Selected=true;
      this.tab2Selected=false;
      this.tab3Selected=false;
      this.tab4Selected=false;
    }
    else if(e=='drafted'){
      this.tab1Selected=false;
      this.tab2Selected=true;
      this.tab3Selected=false;
      this.tab4Selected=false;
    }
    else if(e=='issued'){
      this.tab1Selected=false;
      this.tab2Selected=false;
      this.tab3Selected=true;
      this.tab4Selected=false;
    }
    else if(e=='expired'){
      this.tab1Selected=false;
      this.tab2Selected=false;
      this.tab3Selected=false;
      this.tab4Selected=true;
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
