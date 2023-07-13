import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms"

import { RegisterComponent } from './register.component';
import { ReturnArrowModule } from 'src/app/shared/components/return-arrow/return-arrow.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule, ReturnArrowModule, ReactiveFormsModule, FormsModule
  ]
})
export class RegisterModule { }
