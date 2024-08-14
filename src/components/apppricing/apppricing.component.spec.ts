import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApppricingComponent } from './apppricing.component';

describe('ApppricingComponent', () => {
  let component: ApppricingComponent;
  let fixture: ComponentFixture<ApppricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApppricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApppricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
