import { Group } from "./group"

export class Team {

    constructor() {
    }
 
    groups: Group[] = []

    addGroup(group: Group) {
        this.groups.push(group);
    }

    removeGroup(group: Group) {
        if (this.groups.includes(group)) {
            this.groups.slice(this.groups.indexOf(group));
        }
    }
}