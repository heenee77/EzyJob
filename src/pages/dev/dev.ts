import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ExampleComment } from "../../models/example";
import { CommentsProvider } from "../../providers/comments/comments";

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
  commentList: ExampleComment[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public commentsProvider: CommentsProvider
  ) {
    this.commentsProvider.getAllComments().then(responseData => {
      this.commentList = responseData;
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DevPage");
  }
}
