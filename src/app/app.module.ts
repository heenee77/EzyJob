import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ComponentsModule } from '../components/components.module'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BusinessPage } from '../pages/business/business';
import { ReportPage } from '../pages/report/report';
import { ClientPage } from '../pages/client/client';
import { JobPage } from '../pages/job/job';
import { JobDetailsPage } from '../pages/job-details/job-details';

import { StatusBar } from '@ionic-native/status-bar';
import { JobManagerPage } from '../pages/job-manager/job-manager';
import { LoginPage } from '../pages/login/login';
import { UserDropdownPage } from '../pages/user-dropdown/user-dropdown';


import { HttpClientModule } from "@angular/common/http";
import { NgCalendarModule  } from 'ionic2-calendar';
import { DevPage } from '../pages/dev/dev';
import { RequestProvider } from '../providers/request/request';
import { C01ClientInfoPage } from '../pages/c01-client-info/c01-client-info';
import { C02ClientNewFormPage } from '../pages/c02-client-new-form/c02-client-new-form';

import { J01JobNewPage } from '../pages/j01-job-new/j01-job-new';
import { B01QuoteDropdownPage } from '../pages/b01-quote-dropdown/b01-quote-dropdown';
import { B02NewDropdownPage } from '../pages/b02-new-dropdown/b02-new-dropdown';
import { B03QuoteInfoPage } from '../pages/b03-quote-info/b03-quote-info';
import { B04InvoicePage } from '../pages/b04-invoice/b04-invoice';
import { B05QuoteNewPage } from '../pages/b05-quote-new/b05-quote-new';
import { B06InvoiceNewPage } from '../pages/b06-invoice-new/b06-invoice-new';
import { B07InvoiceInfoPage } from '../pages/b07-invoice-info/b07-invoice-info';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ListPage,
    HomePage,
    JobManagerPage,
    ClientPage,
    JobPage,
    BusinessPage,
    ReportPage,
    JobDetailsPage,
    UserDropdownPage,
    DevPage,
    C01ClientInfoPage,
    C02ClientNewFormPage,
    J01JobNewPage,
    B01QuoteDropdownPage,
    B02NewDropdownPage,
    B03QuoteInfoPage,
    B04InvoicePage,
    B05QuoteNewPage,
    B06InvoiceNewPage,
    B07InvoiceInfoPage
  ],
  imports: [
    ComponentsModule,
    NgCalendarModule,
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
    JobManagerPage,
    ClientPage,
    JobPage,
    BusinessPage,
    ReportPage,
    JobDetailsPage,
    UserDropdownPage,
    DevPage,
    C01ClientInfoPage,
    C02ClientNewFormPage,
    J01JobNewPage,
    B01QuoteDropdownPage,
    B02NewDropdownPage,
    B03QuoteInfoPage,
    B04InvoicePage,
    B05QuoteNewPage,
    B06InvoiceNewPage,
    B07InvoiceInfoPage
  ],
  providers: [
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RequestProvider
  ]
})
export class AppModule {}
