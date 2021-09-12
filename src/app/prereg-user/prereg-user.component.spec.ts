import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreregUserComponent } from './prereg-user.component';

describe('PreregUserComponent', () => {
  let component: PreregUserComponent;
  let fixture: ComponentFixture<PreregUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreregUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreregUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
