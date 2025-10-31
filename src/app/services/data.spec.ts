import { TestBed } from '@angular/core/testing';
import { DataService } from './data';  // ← Importa de './data'

describe('DataService', () => {  // ← Cambia a DataService
  let service: DataService;      // ← Cambia a DataService

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);  // ← Cambia a DataService
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});