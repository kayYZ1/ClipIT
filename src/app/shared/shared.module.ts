import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    AppRoutingModule
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
