import { TestBed } from '@angular/core/testing';

import { ListClubsService } from './list-clubs.service';

describe('ListClubsService', () => {
  let service: ListClubsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListClubsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
