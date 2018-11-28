import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobManagerPage } from './job-manager';

@NgModule({
  declarations: [
    JobManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(JobManagerPage),
  ],
})
export class JobManagerPageModule {}
