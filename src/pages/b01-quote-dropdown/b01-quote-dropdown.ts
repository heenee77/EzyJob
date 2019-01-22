import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { BusinessPage } from '../business/business';
import { B04InvoicePage } from '../b04-invoice/b04-invoice';

/**
 * Generated class for the B01QuoteDropdownPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-b01-quote-dropdown',
  templateUrl: 'b01-quote-dropdown.html',
})
export class B01QuoteDropdownPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad B01QuoteDropdownPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  invoice() {
    this.navCtrl.setRoot(B04InvoicePage);
  }

  quote() {
    this.navCtrl.setRoot(BusinessPage);
  }

}
