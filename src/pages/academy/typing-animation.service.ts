import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypingAnimationService {
  private phrases: string[] = [
    'Get Mentorship',
    'Convenient Class Time',
    'Get Certificate'
  ];
  private currentPhraseIndex: number = 0;
  private currentCharacterIndex: number = 0;
  private currentText: string = '';
  private isDeleting: boolean = false;

  constructor() {}

  getCurrentText(): string {
    return this.currentText;
  }

  updateText() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];
    if (this.isDeleting) {
      this.currentCharacterIndex--;
      if (this.currentCharacterIndex <= 0) {
        this.isDeleting = false;
        this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      }
    } else {
      this.currentCharacterIndex++;
      if (this.currentCharacterIndex >= currentPhrase.length) {
        this.isDeleting = true;
      }
    }

    this.currentText = currentPhrase.substring(0, this.currentCharacterIndex);
  }
}
