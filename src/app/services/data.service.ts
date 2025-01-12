import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from './group';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  url = "http://127.0.0.1:5000/control/";

  getGroups(): Observable<Group[]> {
    console.log("getGroups: " + this.url + "get_groups");
    return this.http.get<Group[]>(this.url + "get_groups");
  }

  addGroup(group: Group): Observable<any> {
    const headers = {"content-type": "application/json"};
    const body = JSON.stringify(group);
    console.log(body);
    return this.http.post(this.url + "add_group", body, {"headers":headers});
  }
}
