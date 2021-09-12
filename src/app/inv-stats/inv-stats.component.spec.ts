import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvStatsComponent } from './inv-stats.component';

describe('InvStatsComponent', () => {
  let component: InvStatsComponent;
  let fixture: ComponentFixture<InvStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
