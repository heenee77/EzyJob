import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  jobs: Array<{jobNum: string, jobDesc: string}>;

  constructor(public navCtrl: NavController) {
    this.jobs = [
      {jobNum: "J0001", jobDesc:"Initial Meeting"},
      {jobNum: "J0002", jobDesc:"Planning"},
      {jobNum: "J0003", jobDesc:"Development"}
    ]
  }
  
}
