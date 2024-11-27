import { Component } from '@angular/core';
import { NavigationService } from '../../app/navigation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

showLogin:boolean=false;
showLogout:boolean=false;
showSignup:boolean=false;
constructor(private navigationService:NavigationService) {};
navigateToHome(): void {
  this.navigationService.navigateToHome();
}

navigateToTutor(): void {
  this.navigationService.navigateToTutor();
}

navigateToCard(): void {
  this.navigationService.navigateToCard();
}
navigateToReceipt(): void {
  this.navigationService.navigateToReceipt();
}

navigateToSms(): void {
  this.navigationService.navigateToSms();
}

navigateToSignup(): void {
  this.navigationService.navigateToSignup();
}

navigateToLogin(): void {
  this.navigationService.navigateToLogin();
}
navigateTocreate(): void {
  this.navigationService.navigateTocreate();
}
navigateToDrills():void{
  this.navigationService.navigateToDrills();
}
navigateToTestimonies():void{
  this.navigationService.navigateToTestimonies();
}

}
