import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JobDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-details',
  templateUrl: 'job-details.html',
})
export class JobDetailsPage {
  selection:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selection = this.navParams.get('jobDesc');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobDetailsPage');
  }

}
