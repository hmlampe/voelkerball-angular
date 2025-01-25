import { TestBed } from '@angular/core/testing';

import { GameMechanicService } from './game-mechanic.service';

describe('GameMechanicService', () => {
  let service: GameMechanicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameMechanicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
