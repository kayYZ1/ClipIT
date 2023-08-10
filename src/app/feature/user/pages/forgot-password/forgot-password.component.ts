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

  resetPasswordForm = new FormGroup(
    {
      email: new FormControl("", [Validators.required, Validators.email])
    }
  )

  onSubmit() {
    try {
      this._authService.userForgotPassword(this.resetPasswordForm.value.email as string)
    } catch (error) {
      console.log(error)
    }
  }
}
