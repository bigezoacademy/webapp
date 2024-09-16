import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoniesComponent } from './testimonies.component';

describe('TestimoniesComponent', () => {
  let component: TestimoniesComponent;
  let fixture: ComponentFixture<TestimoniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimoniesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
