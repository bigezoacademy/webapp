import { Component} from '@angular/core';
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
export class HomeComponent {
    typingText: string = '';
    private intervalId: any;
  
    constructor(private navigationService:NavigationService,private typingAnimationService: TypingAnimationService) {}
  
    ngOnInit(): void {
      this.startTypingAnimation();
    }
  
    ngOnDestroy(): void {
      clearInterval(this.intervalId);
    }
  
    startTypingAnimation(): void {
      this.intervalId = setInterval(() => {
        this.typingAnimationService.updateText();
        this.typingText = this.typingAnimationService.getCurrentText();
      }, 300); // Adjust typing speed here
    }

navigateToAcademy(){
   this.navigationService.navigateToAcademy(); 
}
navigateToSms(){
    this.navigationService.navigateToSms(); 
 }
}
