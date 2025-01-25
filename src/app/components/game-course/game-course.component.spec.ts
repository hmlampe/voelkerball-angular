import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCourseComponent } from './game-course.component';

describe('GameCourseComponent', () => {
  let component: GameCourseComponent;
  let fixture: ComponentFixture<GameCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
