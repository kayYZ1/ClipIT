import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { RegisterValidators } from 'src/app/shared/validators/register-validator';
import { AuthService } from '../../services/AuthService';
import { IUser } from 'src/app/core/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private _auth: AuthService) {}
  
  loading = false
  message = ""
  code = null

  registerForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
        ),
      ]),
      r_password: new FormControl('', Validators.required),
      age: new FormControl(0, [
        Validators.required,
        Validators.min(18),
        Validators.max(60),
      ]),
    },
    [RegisterValidators.match('password', 'r_password')]
  );

  async onSubmit() {
    try {
      this.loading = true
      await this._auth.createUser(this.registerForm.value as IUser)
      this.loading = false
    } catch (e: any) {
      this.loading = true
      console.error(e)
      this.code = e.code
      this.message = e.message
      this.loading = false
    }
  }
}
