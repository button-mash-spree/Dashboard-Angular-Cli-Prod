/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodosServiceService } from './todos-service.service';

describe('TodosServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosServiceService]
    });
  });

  it('should ...', inject([TodosServiceService], (service: TodosServiceService) => {
    expect(service).toBeTruthy();
  }));
});
