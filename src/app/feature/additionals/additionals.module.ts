import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LicensingComponent } from './pages/licensing/licensing.component';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    LicensingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdditionalsModule { }
