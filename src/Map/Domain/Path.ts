import {PointsCollection} from "./PointsCollection";

export class Path {

    public id: number;
    public strokeColor: string;
    public points: PointsCollection;

    constructor (id: number, strokeColor: string, points: PointsCollection) {
        this.id = id;
        this.strokeColor = strokeColor;
        this.points = points;
    }

}