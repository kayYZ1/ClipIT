import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/feature/user/services/AuthService';
import { UserService } from 'src/app/feature/user/services/UserService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styleUrls: ['./auth-navbar.component.scss'],
  providers: [UserService, AuthService],
})
export class AuthNavbarComponent {
  constructor() {}
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();
  userId: string | null = null;
  userInfo$: Observable<any> | null = null;

  onLogout() {
    this.logout.emit();
    console.log(this.userId);
  }
}
