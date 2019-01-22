import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the B07InvoiceInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-b07-invoice-info',
  templateUrl: 'b07-invoice-info.html',
})
export class B07InvoiceInfoPage {
  public tab1Selected: boolean;
  public tab2Selected: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    //this.quote = this.navParams.get('quote');
    this.tab1Selected=true;
    this.tab2Selected=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad B07InvoiceInfoPage');
  }

  tabSel(o){
    if(o=='information'){
      this.tab1Selected=true;
      this.tab2Selected=false;
    }
    else if(o=='history'){
      this.tab1Selected=false;
      this.tab2Selected=true;
    }
    
  }

  editInvoice(){
    this.viewCtrl.dismiss();
  }
}
