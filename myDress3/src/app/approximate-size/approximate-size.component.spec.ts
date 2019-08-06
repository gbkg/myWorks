import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproximateSizeComponent } from './approximate-size.component';

describe('ApproximateSizeComponent', () => {
  let component: ApproximateSizeComponent;
  let fixture: ComponentFixture<ApproximateSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproximateSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproximateSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
