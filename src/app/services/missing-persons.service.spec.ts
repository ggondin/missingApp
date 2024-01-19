import { TestBed } from '@angular/core/testing';

import { MissingPersonsService } from './missing-persons.service';

describe('MissingPersonsService', () => {
  let service: MissingPersonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissingPersonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
