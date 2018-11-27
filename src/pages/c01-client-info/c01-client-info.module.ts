import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { C01ClientInfoPage } from './c01-client-info';

@NgModule({
  declarations: [
    C01ClientInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(C01ClientInfoPage),
  ],
})
export class C01ClientInfoPageModule {}
