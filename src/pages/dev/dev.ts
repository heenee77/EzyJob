import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { RequestProvider } from "../../providers/request/request";
import { User } from "../../models/user";

/**
 * Generated class for the DevPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-dev",
  templateUrl: "dev.html"
})
export class DevPage {

  userList: User[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public requestProvider: RequestProvider
  ) {
    requestProvider.getDataList<User>("USER", "mcwei", 1).then(result => {
      // this.userList = result;
      console.log("result: ", result);
    })
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DevPage");
  }
}
