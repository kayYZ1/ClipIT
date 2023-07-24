import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { ReturnArrowModule } from 'src/app/shared/components/return-arrow/return-arrow.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertsModule } from 'src/app/shared/components/alerts/alerts.module';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReturnArrowModule,
    ReactiveFormsModule,
    FormsModule,
    AlertsModule,
    SpinnerModule
  ],
})
export class LoginModule {}
