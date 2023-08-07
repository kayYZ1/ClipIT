import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/feature/user/services/AuthService';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {
  constructor(private _authService: AuthService) {}

  isAuthenticated$: Observable<boolean> = this._authService.isAuthenticated$;

  logout() {
    this._authService.userLogout();
  }
}
