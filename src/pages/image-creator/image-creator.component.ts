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
  textInputs: { text: string, color: string, size: string }[] = [];  
  selectedBackground: string | null = null;  
  imageDataUrl: string | undefined;  
  uploadedImage: string | null = null;

  backgroundImages: string[] = [  
    '/images/cards/bg.jpg',  
    '/images/cards/bg2.jpg',  
    '/images/cards/bg3.jpg',
    '/images/cards/bg4.jpg'  
  ];  
  
  textColors = [
    { name: 'White', value: '#FFFFFF' },
    { name: 'Black', value: '#000000' },
    { name: 'Yellow', value: '#FFFF00' },
    { name: 'Red', value: '#FF0000' },
    { name: 'Blue', value: '#0000FF' },
    { name: 'Green', value: '#008000' }
  ];
  
  textSizes = [
    { name: 'h1', value: '72px' },
    { name: 'h2', value: '60px' },
    { name: 'h3', value: '48px' },
    { name: 'h4', value: '36px' },
    { name: 'h5', value: '24px' },
    { name: 'h6', value: '20px' },
    { name: 'p', value: '16px' }
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

  addTextInput() {
    this.textInputs.push({ text: '', color: '#FFFF00', size: '16px' }); // Default color and size
  }

  removeTextInput(index: number) {
    this.textInputs.splice(index, 1);
  }

  createImage() {  
    const imageSource = this.uploadedImage || this.selectedBackground;
    
    // Check if either the image source or any text input is missing
    if (this.textInputs.every(input => input.text.trim() === '') || !imageSource) {  
      Swal.fire({
        icon: 'error',
        title: 'Please enter at least one text input & select an image',
      });
      return;  
    }  
    
    if (!imageSource) {  
      Swal.fire({
        icon: 'error',
        title: 'Please select an image to use.',
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

      let yOffset = 100; // Starting Y position for text
      this.textInputs.forEach(input => {
        ctx.font = `${input.size} serif`;  
        ctx.fillStyle = input.color;  
        ctx.fillText(input.text, 70, yOffset);  
        yOffset += parseInt(input.size) + 10; // Add some margin after each text
      });

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
