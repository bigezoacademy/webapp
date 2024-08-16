import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCreatorComponent } from './image-creator.component';

describe('ImageCreatorComponent', () => {
  let component: ImageCreatorComponent;
  let fixture: ComponentFixture<ImageCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageCreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
