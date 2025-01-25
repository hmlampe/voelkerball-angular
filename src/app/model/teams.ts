import { Group } from "./group"
import { Round } from "./round";

export class Team {

    constructor() {
    }
 
    groups: Group[] = []
    rounds: Round[] = []

    addGroup(group: Group) {
        this.groups.push(group);
    }

    removeGroup(group: Group) {
        if (this.groups.includes(group)) {
            this.groups.slice(this.groups.indexOf(group));
        }
    }

    getNextPlayers() {
        let player1 = this.groups[0];
        for(const group of this.groups) {
            if(group.games < player1.games) {
                player1 = group;
            }
        }
        player1.games++;
        let player2 = this.groups[0];
        for(const group of this.groups) {
            if(group != player1 && !player1.opponents.includes(group)) {
                player2 = group;
                break;
            }
        }
        for(const group of this.groups) {
            if(group != player1 && !player1.opponents.includes(group)) {
                if(group.games < player2.games) {
                    player2 = group;
                }
            }
        }
        player2.games++;
        player1.opponents.push(player2);
        player2.opponents.push(player1);
        let players: Group[] = [player1, player2];
        return players;
    }

    getNumberRounds() {
        let num: number = 0;
        for(let i=this.groups.length-1; i>0; i--) {
            num += i;
        }
        return num;
    }

    setReady() {
        for(const group of this.groups) {
            group.games = 0;
        }
        for(let i=0; i<this.getNumberRounds(); i++) {
            let players = this.getNextPlayers();
            this.rounds.push(new Round(players[0], players[1]));
        }
    }
}