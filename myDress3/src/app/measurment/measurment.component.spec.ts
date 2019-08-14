import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurmentComponent } from './measurment.component';

describe('MeasurmentComponent', () => {
  let component: MeasurmentComponent;
  let fixture: ComponentFixture<MeasurmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
