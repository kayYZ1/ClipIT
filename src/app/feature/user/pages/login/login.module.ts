import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { ReturnArrowModule } from 'src/app/shared/components/return-arrow/return-arrow.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReturnArrowModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class LoginModule {}
