import { Component } from '@angular/core';
import { CardpricingComponent } from "../../components/cardpricing/cardpricing.component";
import Swal from 'sweetalert2';
declare var gtag: Function;

@Component({
  selector: 'app-cardgenerator',
  standalone: true,
  imports: [CardpricingComponent],
  templateUrl: './cardgenerator.component.html',
  styleUrl: './cardgenerator.component.css'
})
export class CardgeneratorComponent {
  showPricing: boolean = true;
  showForm: boolean = false;



  getFree(): void {
    // Send event to Google Analytics
    gtag('event', 'download', {
      'event_category': 'Download',
      'event_label': 'BigezoCardsSetup',
      'value': 1,
    });

    // Proceed with the download
    const link = document.createElement('a');
    link.href = 'https://drive.usercontent.google.com/download?id=1ZcDLZMysaZyQifJ8JnoMElznGxN4EL4W&export=download&authuser=0';
    link.download = 'bigezocardssetup.exe';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
