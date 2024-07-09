import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesComponent } from "../../components/courses/courses.component";
import Swal from 'sweetalert2';
import { TestimonialComponent } from "../../components/testimonial/testimonial.component";
import { TypingAnimationService } from './typing-animation.service';

@Component({
  selector: 'app-academy',
  standalone: true,
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css'],
  imports: [CoursesComponent, TestimonialComponent]
})
export class AcademyComponent implements OnInit, OnDestroy {
  typingText: string = '';
  private intervalId: any;

  constructor(private typingAnimationService: TypingAnimationService) {}

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
