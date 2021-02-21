import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { B04InvoicePage } from './b04-invoice';

@NgModule({
  declarations: [
    B04InvoicePage,
  ],
  imports: [
    IonicPageModule.forChild(B04InvoicePage),
  ],
})
export class B04InvoicePageModule {}
