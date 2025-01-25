import { Group } from "./group";

export class Round {

    player1: Group = new Group("");
    player2: Group = new Group("");


    constructor(p1: Group, p2: Group) {
        this.player1 = p1;
        this.player2 = p2;
    }

}