import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpricingComponent } from './cardpricing.component';

describe('CardpricingComponent', () => {
  let component: CardpricingComponent;
  let fixture: ComponentFixture<CardpricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardpricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
