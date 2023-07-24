import { Component } from '@angular/core';
import { AuthService } from '../../services/AuthService';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _auth: AuthService) {}

  loading = false;
  message = '';
  code = null;

  loginForm = new FormGroup(
    {
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    }
  )

  onSubmit() {
    console.log("hehe")
  }
}
