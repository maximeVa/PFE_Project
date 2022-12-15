import { TestBed } from '@angular/core/testing';

import { LeaderPlayerService } from './leader-player.service';

describe('LeaderPlayerService', () => {
  let service: LeaderPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaderPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
