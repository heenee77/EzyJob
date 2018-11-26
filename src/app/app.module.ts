import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BusinessPage } from '../pages/business/business';
import { ReportPage } from '../pages/report/report';
import { ClientPage } from '../pages/client/client';
import { JobPage } from '../pages/job/job';
import { JobDetailsPage } from '../pages/job-details/job-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { UserDropdownPage } from '../pages/user-dropdown/user-dropdown';


import { HttpClientModule } from "@angular/common/http";
import { DevPage } from '../pages/dev/dev';
import { RequestProvider } from '../providers/request/request';
import { JobProvider } from '../providers/job/job';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ListPage,
    HomePage,
    ClientPage,
    JobPage,
    BusinessPage,
    ReportPage,
    JobDetailsPage,
    UserDropdownPage,
    DevPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ListPage,
    HomePage,
    ClientPage,
    JobPage,
    BusinessPage,
    ReportPage,
    JobDetailsPage,
    UserDropdownPage,
    DevPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RequestProvider,
    JobProvider
  ]
})
export class AppModule {}
