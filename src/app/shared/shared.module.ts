import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    InputComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    RouterModule, 
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
