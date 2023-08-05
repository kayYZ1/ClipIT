import { Component, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/feature/user/services/UserService';

@Component({
  selector: 'app-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styleUrls: ['./auth-navbar.component.scss'],
  providers: [UserService]
})
export class AuthNavbarComponent {
  constructor(private _userService: UserService) {}
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();
  @Output() userInfo$: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    console.log(this.userInfo$)
  }

  onLogout() {
    this.logout.emit();
  }
}
