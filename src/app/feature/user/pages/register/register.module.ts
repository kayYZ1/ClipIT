import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { ReturnArrowModule } from 'src/app/shared/components/return-arrow/return-arrow.module';
import { AlertsModule } from 'src/app/shared/components/alerts/alerts.module';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule, ReturnArrowModule, ReactiveFormsModule, FormsModule, AlertsModule, SpinnerModule
  ],
})
export class RegisterModule { }
