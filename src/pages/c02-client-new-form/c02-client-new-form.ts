import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ClientPage } from '../client/client';

/**
 * Generated class for the C02ClientNewFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c02-client-new-form',
  templateUrl: 'c02-client-new-form.html',
})
export class C02ClientNewFormPage {

  private todo : FormGroup;
  staff : string[] = [
    "Tim",
    "Bob",
    "Michael"
  ]
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.todo = this.formBuilder.group({
      clientName: ['', Validators.required],
      accountManager: ['', Validators.required],
      jobManager: ['', Validators.required],
      phone: ['', Validators.required],
      fax: [''],
      email: ['', Validators.required],
      web: [''],
      streetAddress: ['', Validators.required],
      townCity: ['', Validators.required],
      stateRegion: ['', Validators.required],
      zipcode: ['', Validators.required],
      country: ['', Validators.required],
      zeroRatedTax: [false]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad C02ClientNewFormPage');
  }

  logForm(){
    console.log(this.todo.value);
  }

  navToClientPage(){
    this.navCtrl.setRoot(ClientPage);
  }
}
