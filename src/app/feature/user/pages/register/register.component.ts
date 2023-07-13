import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from 'src/app/core/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor() {}

  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  r_password = new FormControl("", Validators.required)
  age = new FormControl(0, [Validators.required, Validators.min(18), Validators.max(60)])

  registerForm = new FormGroup(
    {
      email: this.email,
      username: this.username,
      password: this.password,
      r_password: this.r_password,
      age: this.age
    },
  )

  register() {
    console.log(this.registerForm.value as IUser)  
  }
}
