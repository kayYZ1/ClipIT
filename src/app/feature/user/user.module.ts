import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';
import { UserRoutingModule } from './user.routing.module';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    RegisterModule,
    UserRoutingModule
  ]
})
export class UserModule { }
