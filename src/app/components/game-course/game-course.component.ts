import { Component } from '@angular/core';
import { GameMechanicService } from '../../services/game-mechanic.service';
import { Team } from '../../model/teams';

@Component({
  selector: 'app-game-course',
  imports: [],
  templateUrl: './game-course.component.html',
  styleUrl: './game-course.component.scss'
})
export class GameCourseComponent {

  teams: Team[] = [];

  constructor(mechanic: GameMechanicService) {
    this.teams = mechanic.getTeams();
  }
}
