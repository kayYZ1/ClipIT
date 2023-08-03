import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/feature/user/services/AuthService';
import { UserService } from 'src/app/feature/user/services/UserService';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {
  constructor(private _authService: AuthService, private _userService: UserService) {}

  isAuthenticated$: Observable<boolean> = this._authService.isAuthenticated$;
  token: string = this._authService.token

  userInfo$: any = this._userService.getUserData(this.token)

  logout() {
    this._authService.userLogout();
  }
}