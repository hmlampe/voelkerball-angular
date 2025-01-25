import { Injectable } from '@angular/core';
import { Group } from '../model/group';
import { Team } from '../model/teams';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GameMechanicService {

  groups: Group[] = [];
  teams: Team[] = [];

  team_count: number = 2;
  game_time: number = 5;
  break_time: number = 3;

  constructor(private dataService:DataService) {
  }

  async getGroupNames() {
    let groups: string[] = [];
    this.groups = [];
    this.dataService.getGroups().subscribe(data => {
      console.log(data);
      data.forEach(element => {
        this.groups.push(element);
        groups.push(element.name)
      })
    });
    return groups;
  }

  addGroup(name: string) {
    let found: Boolean = false;
    for(const group of this.groups) {
      if(group.name == name) {
        found = true;
      }
    }
    if( ! found) {
      let groupObj = new Group(name);
      this.dataService.addGroup(groupObj).subscribe(data => console.log(data));
      this.dataService.getGroups().subscribe(data => console.log(data));
      this.groups.push(groupObj);
    }
    let groups: string[] = []
    this.groups.forEach(group => groups.push(group.name))
    return groups
  }

  removeGroup(group: string) {
    this.groups.forEach(g => {
      if (g.name == group) {
        this.groups.slice(this.groups.indexOf(g, 1));
      }
    })
    let groups: string[] = []
    this.groups.forEach(group => groups.push(group.name))
    return groups
  }

  setMechanics(team_count: number, game_time: number, break_time: number) {
    this.team_count = team_count;
    this.game_time = game_time;
    this.break_time = break_time;
    this.setTeams();
    for(const team of this.teams) {
      team.setReady();
    }
    return this.calculateTimeAll();
  }

  calculateTimeAll() {
    let groups_in_team = Number(this.groups.length/Number(this.team_count));
    groups_in_team = Math.round(groups_in_team);
    let games = groups_in_team-1;
    for (let i=groups_in_team-2; i>=1; i--) {
      games = games + i;
    }
    // Gruppenphase
    let time_all = (games * Number(this.game_time)) + ((games-1) * Number(this.break_time));
    // Halbfinale + Finale
    time_all += (3 * (Number(this.game_time) + Number(this.break_time)));
    return time_all;
  }

  setTeams() {
    this.teams = [];
    for (let i=0; i<this.team_count; i++) {
      this.teams.push(new Team());
    }

    for (let i=0; i<this.groups.length; ) {
      for (const team of this.teams) {
        if (i >= this.groups.length) {
          break;
        }
        team.addGroup(this.groups[i++]);
      }
    }
  }

  getTeams() {
    return this.teams;
  }
}
