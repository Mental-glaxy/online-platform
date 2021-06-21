import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdThemesComponent } from './ed-themes.component';

describe('EdThemesComponent', () => {
  let component: EdThemesComponent;
  let fixture: ComponentFixture<EdThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdThemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
