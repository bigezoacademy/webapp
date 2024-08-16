import { Component, ElementRef, ViewChild } from '@angular/core';  
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import Swal from 'sweetalert2';

@Component({  
  selector: 'app-image-creator',  
  standalone: true,  
  imports: [CommonModule, FormsModule], 
  templateUrl: './image-creator.component.html',  
  styleUrls: ['./image-creator.component.css']  
})  
export class ImageCreatorComponent {  
  userInput: string = '';  
  selectedBackground: string | null = null;  
  imageDataUrl: string | undefined;  
  uploadedImage: string | null = null;

  backgroundImages: string[] = [  
    '/images/cards/bg.jpg',  
    '/images/cards/bg2.jpg',  
    '/images/cards/bg3.jpg',
    '/images/cards/bg4.jpg'  
  ];  

  @ViewChild('canvasElement') canvasElement!: ElementRef<HTMLCanvasElement>;  

  selectBackground(image: string) {  
    this.selectedBackground = image;
    this.uploadedImage = null; // Reset uploaded image if a background is selected
  }
  

  onImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.uploadedImage = reader.result as string;
        this.selectedBackground = null; // Reset selected background if a new image is uploaded
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  createImage() {  
    const imageSource = this.uploadedImage || this.selectedBackground;
    
    // Check if either the image source or user input is missing
    if (!this.userInput && !imageSource ) {  
      Swal.fire({
        icon: 'error',
        title: 'Please enter text & select an image',
      });
      return;  
    }  
    
    if (!imageSource ) {  
      Swal.fire({
        icon: 'error',
        title: 'Please select an image to use.',
       
      });
      return;  
    } 
    if (!this.userInput) {  
      Swal.fire({
        icon: 'error',
        title: 'Please enter text before creating the image',
      });
      return;  
    }   

  
    const canvas = this.canvasElement.nativeElement;  
    const ctx = canvas.getContext('2d');  
  
    if (!ctx) {  
      console.error('Could not get canvas context');  
      return;  
    }  
    
    const img = new Image();  
    img.src = imageSource;  
    
    img.onload = () => {  
      canvas.width = img.width;  
      canvas.height = img.height;  
      ctx.drawImage(img, 0, 0);  
      ctx.font = '48px serif';  
      ctx.fillStyle = 'white';  
      ctx.fillText(this.userInput, 50, 100);  
      this.imageDataUrl = canvas.toDataURL('image/jpeg');  
    };  
  }
  deselectImage() {
    this.selectedBackground = null;
    this.uploadedImage = null; // Reset uploaded image if deselected
  }
    

  downloadImage() {  
    const link = document.createElement('a');  
    link.href = this.imageDataUrl || '';  
    link.download = 'my-image.jpg';  
    link.click();  
  }  
}
