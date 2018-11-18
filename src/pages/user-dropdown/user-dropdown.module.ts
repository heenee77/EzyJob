import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserDropdownPage } from './user-dropdown';

@NgModule({
  declarations: [
    UserDropdownPage,
  ],
  imports: [
    IonicPageModule.forChild(UserDropdownPage),
  ],
})
export class UserDropdownPageModule {}
