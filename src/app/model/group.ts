export class Group {

    constructor(name: string) {
        this.name = name;
    }

    name!: string;
    points: number = 0;
    throwOuts: number = 0;
    drops: number = 0;
    games: number = 0;
    opponents: Group[] = [];

    private addPoints(points: number) {
        this.points += points;
    }

    private addThrowOuts(throwOuts: number) {
        this.throwOuts += throwOuts;
    }

    private addDrops(drops: number) {
        this.drops += drops;
    }

    addGameResult(opponent: Group, points: number, throwOuts: number, drops: number) {
        this.addPoints(points);
        this.addThrowOuts(throwOuts);
        this.addDrops(drops);
        this.games++;
        this.opponents.push(opponent);
    }
}