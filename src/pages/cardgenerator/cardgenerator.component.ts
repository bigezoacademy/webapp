import { Component } from '@angular/core';
import { CardpricingComponent } from "../../components/cardpricing/cardpricing.component";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cardgenerator',
  standalone: true,
  imports: [CardpricingComponent],
  templateUrl: './cardgenerator.component.html',
  styleUrl: './cardgenerator.component.css'
})
export class CardgeneratorComponent {
  showPricing:boolean=true;
  showForm:boolean=false;
 getFree(): void {
    Swal.fire({
      html: `
        <div class="text-center">
          <h3 class="text-center text-dark">
          GET FREE VERSION
          </h3>
        <div class="d-none">   <h3 class="text-center"> <a class="btn btn-dark">Fill a Form</a> </h3>
          <p class="text-center">OR</p>
         ></div>
          <p class="text-center">
           <a href="https://api.whatsapp.com/send?phone=+256773913902&text=Hello%20Alfred!" class="btn btn-success">Order via Whatsapp</a>
          </p
        </div>
      `,
      showConfirmButton: false
    });
  }
}
