import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IUser } from 'src/app/core/models/User';

import { RegisterValidators } from 'src/app/shared/validators/register-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  disableBtn = true

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

  ngOnInit() {
    this.registerForm.valueChanges.subscribe(() => {
      this.disableBtn = this.registerForm.invalid
    })
  }

  onSubmit() {
    console.log(this.registerForm.value as IUser);
  }
}
