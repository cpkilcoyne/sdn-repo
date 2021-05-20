import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabulatorDataComponent } from './tabulator-data.component';

describe('TabulatorDataComponent', () => {
  let component: TabulatorDataComponent;
  let fixture: ComponentFixture<TabulatorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabulatorDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabulatorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
