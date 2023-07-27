import { Component } from '@angular/core';
import { AuthService } from './feature/user/services/AuthService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClipIT';
  constructor(private _authService: AuthService) {}

  isAuthenticated$: Observable<boolean> = this._authService.isAuthenticated$
}
