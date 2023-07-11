import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { ReturnArrowModule } from 'src/app/shared/components/return-arrow/return-arrow.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule, ReturnArrowModule],
})
export class LoginModule {}
