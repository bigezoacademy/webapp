import { TestBed } from '@angular/core/testing';

import { TypingAnimationService } from './typing-animation.service';

describe('TypingAnimationService', () => {
  let service: TypingAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypingAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
