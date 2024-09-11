import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
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
  emailme(): void {
    Swal.fire({
      html: `
        <div class="text-center">
          <h1 class="text-center text-danger display-1">
            <i class="bi bi-envelope"></i>
          </h1>
          <p class="text-center">bigezoacademy@gmail.com</p>
          <p class="text-center">
           <a href="mailto:bigezoacademy@gmail.com" class="btn btn-danger">Send me a message</a>
          </p>
        </div>
      `,
      showConfirmButton: false
    });
  }
}
