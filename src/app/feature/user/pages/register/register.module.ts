import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register.component';
import { ReturnArrowModule } from 'src/app/shared/components/return-arrow/return-arrow.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule, ReturnArrowModule
  ]
})
export class RegisterModule { }
