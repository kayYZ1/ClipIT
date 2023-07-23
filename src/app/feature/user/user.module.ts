import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';
import { ForgotPasswordModule } from './pages/forgot-password/forgot-password.module';

import { UserRoutingModule } from './user.routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule,
    LoginModule,
    RegisterModule,
    ForgotPasswordModule,
  ],
})
export class UserModule {}
