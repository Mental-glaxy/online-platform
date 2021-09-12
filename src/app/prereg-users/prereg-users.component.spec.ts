import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreregUsersComponent } from './prereg-users.component';

describe('PreregUsersComponent', () => {
  let component: PreregUsersComponent;
  let fixture: ComponentFixture<PreregUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreregUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreregUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
