import { TestBed } from '@angular/core/testing';

import { AlleventService } from './allevent.service';

describe('AlleventService', () => {
  let service: AlleventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlleventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
