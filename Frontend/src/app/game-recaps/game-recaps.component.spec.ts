import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRecapsComponent } from './game-recaps.component';

describe('GameRecapsComponent', () => {
  let component: GameRecapsComponent;
  let fixture: ComponentFixture<GameRecapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameRecapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameRecapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
