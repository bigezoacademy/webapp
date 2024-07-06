import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolappComponent } from './schoolapp.component';

describe('SchoolappComponent', () => {
  let component: SchoolappComponent;
  let fixture: ComponentFixture<SchoolappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
