import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the B03QuoteInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-b03-quote-info',
  templateUrl: 'b03-quote-info.html',
})
export class B03QuoteInfoPage {

  quote : string;
  public tab1Selected: boolean;
  public tab2Selected: boolean;
  public tab3Selected: boolean;
  public tab4Selected: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.quote = this.navParams.get('quote');
    this.tab1Selected=true;
    this.tab2Selected=false;
    this.tab3Selected=false;
    this.tab4Selected=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad B03QuoteInfoPage');
  }

  tabSel(o){
    if(o=='information'){
      this.tab1Selected=true;
      this.tab2Selected=false;
      this.tab3Selected=false;
      this.tab4Selected=false;
    }
    else if(o=='notes'){
      this.tab1Selected=false;
      this.tab2Selected=true;
      this.tab3Selected=false;
      this.tab4Selected=false;
    }
    else if(o=='documents'){
      this.tab1Selected=false;
      this.tab2Selected=false;
      this.tab3Selected=true;
      this.tab4Selected=false;
    }
    else if(o=='history'){
      this.tab1Selected=false;
      this.tab2Selected=false;
      this.tab3Selected=false;
      this.tab4Selected=true;
    }
    
  }
  
}
