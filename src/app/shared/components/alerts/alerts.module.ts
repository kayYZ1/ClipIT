import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorAlertComponent } from './error-alert/error-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@NgModule({
  declarations: [ErrorAlertComponent, SuccessAlertComponent],
  imports: [CommonModule],
  exports: [ErrorAlertComponent, SuccessAlertComponent],
})
export class AlertsModule {}
