import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class SmsComponent {
  smsCount: number = 0;
  costPerSms: number = 35;
  totalCost: number = 0;
  specificSmsCost: string = '';

  updateSMSCost(): void {
    this.totalCost = this.smsCount * this.costPerSms;
  }

  smscalculator(): void {
    const calculatespecificsmsDiv = document.getElementById('calculatespecificsms') as HTMLInputElement;
    const specificSmsInput = document.getElementById('specificsms') as HTMLInputElement;
    const containerdiv = document.getElementById('container') as HTMLInputElement;
    
    calculatespecificsmsDiv.style.display = "block";
    containerdiv.style.display = "none";
  
    if (specificSmsInput) {
      const specificSmsCount = parseInt(specificSmsInput.value, 10);
      if (!isNaN(specificSmsCount)) {
        const totalCost = specificSmsCount * this.costPerSms;
        this.specificSmsCost = `UGX ${totalCost.toLocaleString()}`;
      } else {
        this.specificSmsCost = 'Invalid input';
      }
    }
  }
  

  specificsmsresult(event: Event): void {
    event.preventDefault();
    this.smscalculator();
  }

  smsslider(): void {
    const calculatespecificsms = document.getElementById('calculatespecificsms') as HTMLElement;
    const smsbutton = document.getElementById('smsbutton') as HTMLElement;
    const sliderbutton = document.getElementById('sliderbutton') as HTMLElement;
    const calculatespecificsmsDiv = document.getElementById('calculatespecificsms') as HTMLInputElement;
    const containerdiv = document.getElementById('container') as HTMLInputElement;
    containerdiv.style.display = "block";
    calculatespecificsmsDiv.style.display = "none";
    

    if (calculatespecificsms) calculatespecificsms.style.display = 'none';
    if (smsbutton) smsbutton.style.display = 'block';
    if (sliderbutton) sliderbutton.style.display = 'none';
  }

  formatNumber(value: number): string {
    return value.toLocaleString(); // Formats number with thousands separator
  }
}
