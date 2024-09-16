import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cardpricing',
  standalone: true,
  imports: [],
  templateUrl: './cardpricing.component.html',
  styleUrl: './cardpricing.component.css'
})
export class CardpricingComponent {
  showPricing:boolean=true;
  showForm:boolean=false;

  getPremium(PREMIUM_APP: string): void {
    Swal.fire({
      html: `
        <div class="text-center">
          <!-- Displaying the value of PREMIUM_APP -->
          <h4 class="chosenapp"> <strong>${PREMIUM_APP}</strong></h4>
          <form id="orderForm" class="d-none">
            <div class="mb-3">
              <input type="text" class="form-control" id="name" name="name" placeholder="Name" required>
            </div>
            <div class="mb-3">
              <input type="tel" class="form-control" id="phone" name="phone" placeholder="Phone" required>
            </div>
            <div class="mb-3">
              <input type="email" class="form-control" id="email" name="email" placeholder="Email" required>
            </div>
            <div class="mb-3">
              <select class="form-control" id="paymentMode" name="paymentMode" required>
                <option value="" disabled selected>Select Payment Mode</option>
                <option value="mobile-money">Mobile Money</option>
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>
            <div class="mb-3">
              <textarea class="form-control" id="message" name="message" rows="3" placeholder="Message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          <div class="mt-3">
            <p class="text-center d-none">OR</p>
            <a href="https://api.whatsapp.com/send?phone=+256773913902&text=Hello%20Bigezo!" class="btn btn-success m-2">Order via Whatsapp</a>
            <a href="mailto:bigezotutor@gmail.com" target="_blank" class="btn btn-danger m-2">Order via Email</a>
          </div>
        </div>
      `,
      showConfirmButton: false,
      showCloseButton: true,
      didOpen: () => {
        const form = document.getElementById('orderForm') as HTMLFormElement;
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          // Handle form submission here, with access to PREMIUM_APP
          console.log('Form submitted with PREMIUM_APP:', PREMIUM_APP);
        });
      }
    });
  }
  

  getFree(): void {
    const link = document.createElement('a');
    link.href = 'https://drive.usercontent.google.com/download?id=1ZcDLZMysaZyQifJ8JnoMElznGxN4EL4W&export=download&authuser=0';
    link.download = 'bigezocardssetup.exe';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  openUrl() {
    window.open('https://youtu.be/6f32IqpDjbs', '_blank');
  }
}
