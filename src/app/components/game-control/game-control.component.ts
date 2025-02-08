import { Component } from '@angular/core';
import { GameMechanicService } from '../../services/game-mechanic.service';
import { Team } from '../../model/team';
import { GameCourseComponent } from "../game-course/game-course.component";

@Component({
  selector: 'app-game-control',
  imports: [GameCourseComponent],
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.scss'
})
export class GameControlComponent {

  teams: Team[] = [];

  constructor(private mechanics: GameMechanicService) {
    this.teams = mechanics.getTeams();
  }



}
