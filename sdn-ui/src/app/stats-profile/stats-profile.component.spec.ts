import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsProfileComponent } from './stats-profile.component';

describe('StatsProfileComponent', () => {
  let component: StatsProfileComponent;
  let fixture: ComponentFixture<StatsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
