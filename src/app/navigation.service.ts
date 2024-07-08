import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) {};
  navigateToHome(): void {
    this.router.navigate(['/']);
  }
  navigateToAcademy(): void {
    this.router.navigate(['/academy']);
  }
  navigateToSms(): void {
    this.router.navigate(['/sms']);
  }
  navigateToSignup(): void {
    this.router.navigate(['/signup']);
  }
  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}
