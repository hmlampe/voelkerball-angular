import { Component, inject, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { NgFor } from '@angular/common';
import { GameControlComponent } from '../components/game-control/game-control.component';
import { TodosService } from '../services/todos.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { Group } from '../model/group';
import { GameMechanicService } from '../services/game-mechanic.service';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, GameControlComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  http = inject(HttpClient)

  team_count = signal<number>(2);
  game_time = signal<number>(5);
  break_time = signal<number>(3);
  groups: string[] = [];
  g = signal<string[]>([]);
  group_objects: Group[] = [];

  constructor(private mechanics:GameMechanicService) {
    this.getGroups();
  }

  async getGroups() {
    this.groups = await this.mechanics.getGroupNames();
  }

  keyUpHandler(event: KeyboardEvent) {
    console.log(`typed something: ${event.key}`);
  }
  
  counter = signal(0);
  countUp() {
    this.counter.set(this.counter()+1);
  }
  countDown() {
    this.counter.update(val => val-1);
  }

  addGroup() {
    let group = (<HTMLInputElement>document.getElementById("addGroup")).value;
    if (this.groups.indexOf(group) != -1) {
      let error = (<HTMLLabelElement>document.getElementById("error"));
      error.innerText = "Gruppe bereits vorhanden";
    }
    else if (group != "") {
      this.groups.push(group);
      this.groups = this.mechanics.addGroup(group);
    }
    else {
      let error = (<HTMLLabelElement>document.getElementById("error"));
      error.innerText = "";
    }
  }

  removeGroup(group: string) {
    this.groups = this.mechanics.removeGroup(group);
  }

  setMechanics() {
    let value = (<HTMLInputElement>document.getElementById("team_count")).value;
    if (value != "") {
      this.team_count.set(Number(value));
    }
    value = (<HTMLInputElement>document.getElementById("game_time")).value;
    if (value != "") {
      this.game_time.set(Number(value));
    }
    value = (<HTMLInputElement>document.getElementById("break_time")).value;
    if (value != "") {
      this.break_time.set(Number(value));
    }
    
    let groups_in_team = Number(this.groups.length/Number(this.team_count()));
    groups_in_team = Math.round(groups_in_team);
    let games = groups_in_team-1;
    for (let i=groups_in_team-2; i>=1; i--) {
      games = games + i;
    }
    // Gruppenphase
    let time_all = (games * Number(this.game_time())) + ((games-1) * Number(this.break_time()));
    // Halbfinale + Finale
    time_all += (3 * (Number(this.game_time()) + Number(this.break_time())));
    let time = <HTMLLabelElement>document.getElementById("time_all");
    time.innerText = String(time_all);
  }

  todoService = inject(TodosService);
}
