import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { JobManagerPage } from '../pages/job-manager/job-manager';

import { LoginPage } from '../pages/login/login';
import { JobDetailsPage } from '../pages/job-details/job-details';
import { ClientPage } from '../pages/client/client';
import { JobPage } from '../pages/job/job';
import { BusinessPage } from '../pages/business/business';
import { ReportPage } from '../pages/report/report';
import { DevPage } from '../pages/dev/dev';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage }, 
      { title: 'List', component: ListPage },
      { title: 'JobDetails', component: JobDetailsPage },
      { title: 'Client', component: ClientPage },
      { title: 'Job', component: JobPage },
      { title: 'Business', component: BusinessPage },
      { title: 'Report', component: ReportPage },
      { title: 'Dev', component: DevPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
