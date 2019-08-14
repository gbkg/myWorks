import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothVarComponent } from './cloth-var.component';

describe('ClothVarComponent', () => {
  let component: ClothVarComponent;
  let fixture: ComponentFixture<ClothVarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothVarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
