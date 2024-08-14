import { Component } from '@angular/core';
import { ApppricingComponent } from "../../components/apppricing/apppricing.component";

@Component({
  selector: 'app-receiptmaker',
  standalone: true,
  imports: [ApppricingComponent],
  templateUrl: './receiptmaker.component.html',
  styleUrl: './receiptmaker.component.css'
})
export class ReceiptmakerComponent {
  showPricing:boolean=true;
  showForm:boolean=false;
  getFree(): void {
    const link = document.createElement('a');
    link.href = 'https://drive.usercontent.google.com/download?id=1ZcDLZMysaZyQifJ8JnoMElznGxN4EL4W&export=download&authuser=0';
    link.download = 'bigezocardssetup.exe';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
