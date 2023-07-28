import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styleUrls: ['./auth-navbar.component.scss'],
})
export class AuthNavbarComponent {
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();

  onLogout() {
    this.logout.emit();
  }
}
