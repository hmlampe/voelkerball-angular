import { Group } from "./group";

export class Round {

    player1: Group = new Group("");
    player2: Group = new Group("");


    constructor(p1: Group, p2: Group) {
        this.player1 = p1;
        this.player2 = p2;
    }

    addGame() {
        var throwOuts1 = parseInt((<HTMLInputElement>document.getElementById(this.player1.name)).value);
        var throwOuts2 = parseInt((<HTMLInputElement>document.getElementById(this.player2.name)).value);
        this.player1.throwOuts += throwOuts1;
        this.player1.drops += throwOuts2;
        this.player2.throwOuts += throwOuts2;
        this.player2.drops += throwOuts1;
        if(throwOuts1 > throwOuts2) {
            this.player1.points += 2;
        }
        else if (throwOuts1 < throwOuts2) {
            this.player2.points += 2;
        }
        else {
            this.player1.points += 1;
            this.player2.points += 1;
        }
    }

}