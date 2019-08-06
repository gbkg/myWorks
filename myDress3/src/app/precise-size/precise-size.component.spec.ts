import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciseSizeComponent } from './precise-size.component';

describe('PreciseSizeComponent', () => {
  let component: PreciseSizeComponent;
  let fixture: ComponentFixture<PreciseSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreciseSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreciseSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
