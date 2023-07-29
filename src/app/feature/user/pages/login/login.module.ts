import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { ReturnArrowModule } from 'src/app/shared/components/return-arrow/return-arrow.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertsModule } from 'src/app/shared/components/alerts/alerts.module';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReturnArrowModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AlertsModule,
    SpinnerModule
  ],
})
export class LoginModule {}
