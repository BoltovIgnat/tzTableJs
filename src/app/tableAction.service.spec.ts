import { TestBed } from '@angular/core/testing';

import { TableActionService } from './tableAction.service';

describe('TableActionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableActionService = TestBed.get(TableActionService);
    expect(service).toBeTruthy();
  });
});
