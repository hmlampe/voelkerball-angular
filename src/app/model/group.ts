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

}