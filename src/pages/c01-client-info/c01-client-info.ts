import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the C01ClientInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c01-client-info',
  templateUrl: 'c01-client-info.html',
})
export class C01ClientInfoPage {
  clientName : string;
  private tab1Selected: boolean;
  private tab2Selected: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.clientName = this.navParams.get('name');
    this.tab1Selected=true;
    this.tab2Selected=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad C01ClientInfoPage');
  }

  tabSel(e){
    if(e=='jobs'){
      this.tab1Selected=false;
      this.tab2Selected=true;
    }
    else if(e=='details'){
      this.tab1Selected=true;
      this.tab2Selected=false;
    }
  }
}
