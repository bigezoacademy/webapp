import { Component, HostListener, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-figma-editor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './figma-editor.component.html',
  styleUrls: ['./figma-editor.component.css']
})
export class FigmaEditor implements OnInit {
  imageUrl: string | ArrayBuffer | null = null;
  textLayers: any[] = [];  // Array to hold multiple text layers
  selectedTextLayer: number | null = null;  // Currently selected text layer

  isDragging: boolean = false;
  dragOffset = { x: 0, y: 0 };

  private textInputSubject = new Subject<{ event: Event, index: number }>();

  @ViewChild('imageCanvas', { static: false }) imageCanvas!: ElementRef<HTMLCanvasElement>;

  ngOnInit() {
    this.textInputSubject.pipe(
      debounceTime(300) // Adjust the debounce time as needed
    ).subscribe(({ event, index }) => this.processTextInput(event, index));
  }

  onImageUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }

  createNewTextLayer() {
    const newTextLayer = {
      text: 'New Text',
      position: { top: 50, left: 50 },
      fontSize: 16,
      fontFamily: 'Arial',
      color: '#000000'
    };
    this.textLayers.push(newTextLayer);
    this.selectedTextLayer = this.textLayers.length - 1;
  }

  startDrag(event: MouseEvent | TouchEvent, index: number) {
    this.isDragging = true;
    this.selectedTextLayer = index;
    const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
    this.dragOffset.x = clientX - this.textLayers[index].position.left;
    this.dragOffset.y = clientY - this.textLayers[index].position.top;
  }

  stopDrag() {
    this.isDragging = false;
  }

  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:touchmove', ['$event'])
  onDrag(event: MouseEvent | TouchEvent) {
    if (this.isDragging && this.selectedTextLayer !== null) {
      const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
      const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
      const layer = this.textLayers[this.selectedTextLayer];
      layer.position.left = clientX - this.dragOffset.x;
      layer.position.top = clientY - this.dragOffset.y;
    }
  }

  onTextInput(event: Event, index: number) {
    this.textInputSubject.next({ event, index });
  }

  processTextInput(event: Event, index: number) {
    const target = event.target as HTMLElement;
    if (this.textLayers[index]) {
      this.textLayers[index].text = target.textContent?.trim() || '';
    }

    // Preserve the caret position after input
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(target);
    range.collapse(false);
    selection?.removeAllRanges();
    selection?.addRange(range);
  }

  downloadImage() {
    const canvas = this.imageCanvas.nativeElement;
    const context = canvas.getContext('2d');
  
    if (context && this.imageUrl) {
      const image = new Image();
      image.src = this.imageUrl as string;
  
      image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
  
        // Clear the canvas before drawing
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw the image
        context.drawImage(image, 0, 0);
  
        // Draw each text layer on top of the image
        this.textLayers.forEach(layer => {
          context.font = `${layer.fontSize}px ${layer.fontFamily}`;
          context.fillStyle = layer.color;
          context.fillText(layer.text, layer.position.left, layer.position.top + layer.fontSize);
        });
  
        // Create a download link for the image
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'designed-image.png';
        link.click();
      };
    }
  }
  
}
