import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LicensingComponent } from './pages/licensing/licensing.component';
import { AdditionalsRoutingModule } from './additionals.routing.module';
import { ReturnArrowModule } from 'src/app/shared/components/return-arrow/return-arrow.module';


@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    LicensingComponent
  ],
  imports: [
    CommonModule, AdditionalsRoutingModule, ReturnArrowModule
  ]
})
export class AdditionalsModule { }
