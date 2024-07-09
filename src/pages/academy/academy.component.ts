import { Component } from '@angular/core';
import { CoursesComponent } from "../../components/courses/courses.component";
import Swal from 'sweetalert2';
import { TestimonialComponent } from "../../components/testimonial/testimonial.component";

@Component({
    selector: 'app-academy',
    standalone: true,
    templateUrl: './academy.component.html',
    styleUrl: './academy.component.css',
    imports: [CoursesComponent, TestimonialComponent]
})
export class AcademyComponent {
whatsappme():void{
    Swal.fire({ html: `
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
    }
       
    );
}
}
