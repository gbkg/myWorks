import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatCmpComponent } from './updat-cmp.component';

describe('UpdatCmpComponent', () => {
  let component: UpdatCmpComponent;
  let fixture: ComponentFixture<UpdatCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
