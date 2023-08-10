import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/AuthService';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  constructor(private _authService: AuthService) {}

  loading = false;
  success = false;
  message = '';
  code = null;

  resetPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  async onSubmit() {
    try {
      this.loading = true;
      await this._authService.userForgotPassword(
        this.resetPasswordForm.value.email as string
      );
      this.loading = false;
      this.success = true;
    } catch (e: any) {
      this.loading = true;
      console.log(e);
      this.code = e.code;
      this.message = e.message;
      this.loading = false;
    }
  }
}
