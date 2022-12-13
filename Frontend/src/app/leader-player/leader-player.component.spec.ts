import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderPlayerComponent } from './leader-player.component';

describe('LeaderPlayerComponent', () => {
  let component: LeaderPlayerComponent;
  let fixture: ComponentFixture<LeaderPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaderPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
