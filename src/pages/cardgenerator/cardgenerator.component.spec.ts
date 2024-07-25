import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardgeneratorComponent } from './cardgenerator.component';

describe('CardgeneratorComponent', () => {
  let component: CardgeneratorComponent;
  let fixture: ComponentFixture<CardgeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardgeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
