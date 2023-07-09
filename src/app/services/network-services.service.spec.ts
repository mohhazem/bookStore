import { TestBed } from '@angular/core/testing';

import { NetworkServicesService } from './network-services.service';

describe('NetworkServicesService', () => {
  let service: NetworkServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
