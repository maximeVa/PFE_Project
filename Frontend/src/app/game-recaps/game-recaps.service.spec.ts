import { TestBed } from '@angular/core/testing';

import { GameRecapsService } from './game-recaps.service';

describe('GameRecapsService', () => {
  let service: GameRecapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameRecapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
