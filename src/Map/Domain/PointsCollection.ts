import {Point} from "./Point";

export class PointsCollection extends Array<Point> {

    public getPointsByTime = (): PointsCollection => {

        return this.sort((prevPoint: Point, nextPoint: Point) => {

            return prevPoint.time - nextPoint.time;
        });
    }

    public getMaxCoordinates = (): [number, number] => {
        const xCoordinates = this.map((point: Point) => {
            return point.x;
        });
        const yCoordinates = this.map((point: Point) => {
            return point.y;
        });

        return [Math.max(...xCoordinates), Math.max(...yCoordinates)];
    }

}