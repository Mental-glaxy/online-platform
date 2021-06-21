import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalTrainerComponent } from './mental-trainer.component';

describe('MentalTrainerComponent', () => {
  let component: MentalTrainerComponent;
  let fixture: ComponentFixture<MentalTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentalTrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentalTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
