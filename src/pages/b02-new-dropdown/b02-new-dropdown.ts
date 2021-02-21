import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { B05QuoteNewPage } from '../b05-quote-new/b05-quote-new';

/**
 * Generated class for the B02NewDropdownPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-b02-new-dropdown',
  templateUrl: 'b02-new-dropdown.html',
})
export class B02NewDropdownPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad B02NewDropdownPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  newQuote() {
      this.navCtrl.setRoot(B05QuoteNewPage);
  }

}
