import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendApproximateSizeComponent } from './friend-approximate-size.component';

describe('FriendApproximateSizeComponent', () => {
  let component: FriendApproximateSizeComponent;
  let fixture: ComponentFixture<FriendApproximateSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendApproximateSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendApproximateSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
