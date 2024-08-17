import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigmaEditorComponent } from './figma-editor.component';

describe('FigmaEditorComponent', () => {
  let component: FigmaEditorComponent;
  let fixture: ComponentFixture<FigmaEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FigmaEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigmaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
