import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DashboardPage } from "../dashboard/dashboard";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  private loginData: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder
  ) {
    this.loginData = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  login() {
    console.log("Login data: ", this.loginData);

    //TODO: Authenticate if login data is valid

    this.navCtrl.setRoot(DashboardPage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
}
