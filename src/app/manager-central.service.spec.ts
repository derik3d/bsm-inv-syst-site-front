import { TestBed } from '@angular/core/testing';

import { ManagerCentralService } from './manager-central.service';

describe('ManagerCentralService', () => {
  let service: ManagerCentralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerCentralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
