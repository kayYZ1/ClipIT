import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/core/models/User';
import { AuthService } from 'src/app/feature/user/services/AuthService';
import { UserService } from 'src/app/feature/user/services/UserService';

@Component({
  selector: 'app-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styleUrls: ['./auth-navbar.component.scss'],
  providers: [UserService, AuthService]
})
export class AuthNavbarComponent {
  constructor(private _userService: UserService, private _authService: AuthService) {}
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();

  onLogout() {
    this.logout.emit();
  }
}
