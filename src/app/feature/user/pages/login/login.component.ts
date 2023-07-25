import { Component } from '@angular/core';
import { AuthService } from '../../services/AuthService';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserLogin } from 'src/app/core/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _auth: AuthService, private router: Router) {}

  loading = false;
  message = '';
  code = null;

  loginForm = new FormGroup(
    {
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    }
  )

  async onSubmit() {
    try {
      this.loading = true
      await this._auth.userLogin(this.loginForm.value as IUserLogin)
      this.router.navigateByUrl("")
    }
    catch (e: any) {
      this.loading = true;
      console.error(e);
      this.code = e.code;
      this.message = e.message;
      this.loading = false;
    }
  }
}
