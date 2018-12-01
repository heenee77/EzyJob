import { NgModule } from '@angular/core';
import { CustomNavbarComponent } from './custom-navbar/custom-navbar';
import { IonicModule } from 'ionic-angular'

@NgModule({
	declarations: [CustomNavbarComponent],
	imports: [
		IonicModule
	],
	exports: [CustomNavbarComponent]
})
export class ComponentsModule {}
