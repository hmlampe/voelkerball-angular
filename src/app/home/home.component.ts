import { Component, inject, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { TodosService } from '../services/todos.service';
import { HttpClient } from '@angular/common/http';
import { GameMechanicService } from '../services/game-mechanic.service';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  http = inject(HttpClient)

  team_count = signal<number>(2);
  game_time = signal<number>(5);
  break_time = signal<number>(3);
  groups: string[] = [];

  constructor(private mechanics:GameMechanicService) {
    this.getGroups();
  }

  async getGroups() {
    this.groups = await this.mechanics.getGroupNames();
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
    
    let minutes_all = this.mechanics.setMechanics(this.team_count(), this.game_time(), this.break_time());
    let hours = String((minutes_all/60)).split('.')[0];
    let minutes = minutes_all%60;
    let time_all = hours + " Stunden " + minutes + " Minuten";

    let time = <HTMLLabelElement>document.getElementById("time_all");
    time.innerText = String(time_all);
  }

  todoService = inject(TodosService);
}
