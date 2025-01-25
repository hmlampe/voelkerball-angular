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

  // team_count = signal<number>(2);
  // game_time = signal<number>(5);
  // break_time = signal<number>(3);

  constructor(private dataService:DataService) {
  }

  async getGroupNames() {
    let groups: string[] = [];
    this.dataService.getGroups().subscribe(data => {
      console.log(data);
      data.forEach(element => {
        this.groups.push(element);
        groups.push(element.name)
      })
    });
    return groups;
  }

  addGroup(group: string) {
    let groupObj = new Group(group);
    this.dataService.addGroup(groupObj).subscribe(data => console.log(data));
    this.dataService.getGroups().subscribe(data => console.log(data));
    this.groups.push(groupObj);
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
}
