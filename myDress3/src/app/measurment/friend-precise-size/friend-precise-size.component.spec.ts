import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendPreciseSizeComponent } from './friend-precise-size.component';

describe('FriendPreciseSizeComponent', () => {
  let component: FriendPreciseSizeComponent;
  let fixture: ComponentFixture<FriendPreciseSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendPreciseSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendPreciseSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
