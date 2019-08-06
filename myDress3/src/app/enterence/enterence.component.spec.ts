import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterenceComponent } from './enterence.component';

describe('EnterenceComponent', () => {
  let component: EnterenceComponent;
  let fixture: ComponentFixture<EnterenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
