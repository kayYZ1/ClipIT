import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/feature/user/services/AuthService';
import { UserService } from 'src/app/feature/user/services/UserService';

@Component({
  selector: 'app-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styleUrls: ['./auth-navbar.component.scss'],
  providers: [UserService, AuthService]
})
export class AuthNavbarComponent {
  constructor(private _authService: AuthService, private _userService: UserService) {}
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();
  
  userId = this._authService.userId

  userInfo$ = this._userService.getSingleUser(this.userId as string)


  onLogout() {
    this.logout.emit();
    console.log(this.userId)
  }
}
