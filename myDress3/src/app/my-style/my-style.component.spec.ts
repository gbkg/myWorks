import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStyleComponent } from './my-style.component';

describe('MyStyleComponent', () => {
  let component: MyStyleComponent;
  let fixture: ComponentFixture<MyStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
