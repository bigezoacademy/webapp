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
  navigateToTutor(): void {
    this.router.navigate(['/tutor']);
  }
  navigateToBooks(): void {
    this.router.navigate(['/books']);
  }
  navigateToCard(): void {
    this.router.navigate(['/cardgenerator']);
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
  navigateToReceipt(): void {
    this.router.navigate(['/receiptmaker']);
  }
  navigateTocreate(): void {
    this.router.navigate(['/create']);
  }
  navigateToDrills():void{
    this.router.navigate(['/drills']);
  }
  navigateToTestimonies():void{
    this.router.navigate(['/testimonies']);
  }
}
