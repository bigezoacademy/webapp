import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesComponent } from "../../components/courses/courses.component";
import Swal from 'sweetalert2';
import { TypingAnimationService } from './typing-animation.service';
import { NavigationService } from '../../app/navigation.service';
import { TestimoniesComponent } from '../testimonies/testimonies.component';

@Component({
  selector: 'app-tutor',
  standalone: true,
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css'],
  imports: [CoursesComponent, TestimoniesComponent]
})
export class TutorComponent implements OnInit, OnDestroy {
  typingText: string = '';
  private intervalId: any;

  constructor(private typingAnimationService: TypingAnimationService,private navigationService:NavigationService) {}
 
navigateToHome(): void {
  this.navigationService.navigateToHome();
}

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

  whatsappme(): void {
    Swal.fire({
      html: `
        <div class="text-center">
          <h1 class="text-center text-success display-1">
            <i class="bi bi-whatsapp"></i>
          </h1>
          <p class="text-center">+256 773 913902</p>
          <p class="text-center">
           <a href="https://api.whatsapp.com/send?phone=+256773913902&text=Hello%20Alfred!" class="btn btn-success">Send me a message</a>
          </p>
        </div>
      `,
      showConfirmButton: false
    });
  }
}
