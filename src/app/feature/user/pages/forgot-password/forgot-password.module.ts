import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordComponent } from './forgot-password.component';
import { ReturnArrowModule } from 'src/app/shared/components/return-arrow/return-arrow.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertsModule } from 'src/app/shared/components/alerts/alerts.module';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    ReturnArrowModule,
    ReactiveFormsModule,
    FormsModule,
    AlertsModule,
    SpinnerModule,
  ],
})
export class ForgotPasswordModule {}
