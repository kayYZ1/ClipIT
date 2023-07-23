import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordComponent } from './forgot-password.component';
import { ReturnArrowModule } from 'src/app/shared/components/return-arrow/return-arrow.module';

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [CommonModule, ReturnArrowModule],
})
export class ForgotPasswordModule {}
