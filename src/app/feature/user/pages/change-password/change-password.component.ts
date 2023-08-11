import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  changePasswordGroup = new FormGroup({
    password: new FormControl('', [Validators.required]),
    r_password: new FormControl('', [Validators.required]),
  });
}
