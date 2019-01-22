import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ViewController } from 'ionic-angular';
import { B01QuoteDropdownPage } from '../b01-quote-dropdown/b01-quote-dropdown';
import { B06InvoiceNewPage } from '../b06-invoice-new/b06-invoice-new';
import { B07InvoiceInfoPage } from '../b07-invoice-info/b07-invoice-info';

/**
 * Generated class for the B04InvoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-b04-invoice',
  templateUrl: 'b04-invoice.html',
})
export class B04InvoicePage {

  public tab1Selected: boolean;
  public tab2Selected: boolean;
  public tab3Selected: boolean;
  public tab4Selected: boolean;
  public selectAllChecked = false;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public viewCtrl: ViewController ) {
    this.tab1Selected=true;
    this.tab2Selected=false;
    this.tab3Selected=false;
    this.tab4Selected=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad B04InvoicePage');
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(B01QuoteDropdownPage);
    popover.present({
      ev: myEvent
    });
  }

  newInvoice() {
    this.navCtrl.push(B06InvoiceNewPage);
  }
  
  invoiceSelected(invoiceSelection){
    this.navCtrl.setRoot(B07InvoiceInfoPage,invoiceSelection);
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
    else if(e=='awaitingpayment'){
      this.tab1Selected=false;
      this.tab2Selected=false;
      this.tab3Selected=true;
      this.tab4Selected=false;
    }
    else if(e=='overdue'){
      this.tab1Selected=false;
      this.tab2Selected=false;
      this.tab3Selected=false;
      this.tab4Selected=true;
    }
  }

  print(){
    this.viewCtrl.dismiss();
  }
}
