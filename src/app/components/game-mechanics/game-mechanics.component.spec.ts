import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMechanicsComponent } from './game-mechanics.component';

describe('GameMechanicsComponent', () => {
  let component: GameMechanicsComponent;
  let fixture: ComponentFixture<GameMechanicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameMechanicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameMechanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
