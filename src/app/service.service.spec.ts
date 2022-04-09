import { TestBed } from '@angular/core/testing';

import { ProdutoService } from './service.service';

describe('ServiceService', () => {
  let service: ProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
