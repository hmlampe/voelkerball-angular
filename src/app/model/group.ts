export class Group {

    constructor(name: string) {
        this.name = name;
    }

    name!: string;
    points: number = 0;
    throwOuts: number = 0;
    drops: number = 0;

    addPoints(points: number) {
        this.points += points;
    }

    addThrowOuts(throwOuts: number) {
        this.throwOuts += throwOuts;
    }

    addDrops(drops: number) {
        this.drops += drops;
    }

    addGameResult(points: number, throwOuts: number, drops: number) {
        this.addPoints(points);
        this.addThrowOuts(throwOuts);
        this.addDrops(drops);
    }
}