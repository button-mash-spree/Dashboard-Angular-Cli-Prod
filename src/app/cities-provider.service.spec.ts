/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CitiesProviderService } from './cities-provider.service';

describe('CitiesProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CitiesProviderService]
    });
  });

  it('should ...', inject([CitiesProviderService], (service: CitiesProviderService) => {
    expect(service).toBeTruthy();
  }));
});
