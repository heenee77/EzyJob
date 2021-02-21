import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { B06InvoiceNewPage } from './b06-invoice-new';

@NgModule({
  declarations: [
    B06InvoiceNewPage,
  ],
  imports: [
    IonicPageModule.forChild(B06InvoiceNewPage),
  ],
})
export class B06InvoiceNewPageModule {}
