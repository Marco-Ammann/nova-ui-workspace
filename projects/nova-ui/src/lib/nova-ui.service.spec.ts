import { TestBed } from '@angular/core/testing';

import { NovaUiService } from './nova-ui.service';

describe('NovaUiService', () => {
  let service: NovaUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovaUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
