import { Component, OnInit} from '@angular/core';
import { CoursesComponent } from "../../components/courses/courses.component";
import { NavigationService } from '../../app/navigation.service';
import { TypingAnimationService } from './typing-animation.service';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CoursesComponent]
})
export class HomeComponent implements OnInit {
    typingText: string = '';
    private intervalId: any;
  
    constructor(private navigationService:NavigationService,private typingAnimationService: TypingAnimationService) {}
  
ngOnInit(): void {
    this.startTypingAnimation();
}

navigateToTutor(){
   this.navigationService.navigateToTutor(); 
}
navigateToSms(){
    this.navigationService.navigateToSms(); 
 }
 navigateToCard(){
  this.navigationService.navigateToCard(); 
}
navigateToReceipt(){
  this.navigationService.navigateToReceipt(); 
}
navigateToTestimonies(){
  this.navigationService.navigateToTestimonies(); 
}
startTypingAnimation(): void {
  this.intervalId = setInterval(() => {
    this.typingAnimationService.updateText();
    this.typingText = this.typingAnimationService.getCurrentText();
  }, 1000); // Adjust typing speed here
}
}
