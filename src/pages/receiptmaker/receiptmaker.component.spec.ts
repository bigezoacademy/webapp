import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptmakerComponent } from './receiptmaker.component';

describe('ReceiptmakerComponent', () => {
  let component: ReceiptmakerComponent;
  let fixture: ComponentFixture<ReceiptmakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptmakerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptmakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
