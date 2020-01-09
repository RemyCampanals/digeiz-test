import {Path} from "../../Domain/Path"
import {Point} from "../../Domain/Point"
import {PointsCollection} from "../../Domain/PointsCollection"

import {IMapRepositories} from "./IMapRepositories"

export class StaticRepository implements IMapRepositories {

    public getPeoplesPaths = async(): Promise<Path[]> => {

        return (
            [
                new Path(
                    4421, 
                    'red',
                    new PointsCollection(
                        ...[
                            new Point(240, 0.2, 0.2),
                            new Point(280, 1.5, 0.5),
                            new Point(300, 1.55, 0.7),
                            new Point(340, 2, 0.8),
                            new Point(540, 4, 0.78),
                            new Point(640, 4.11, 0.8),
                            new Point(705, 4.07, 1.2),
                            new Point(800, 3.85, 1.5),
                            new Point(900, 3.8, 1.4),
                            new Point(1000, 2.8, 1.4),
                            new Point(1100, 2.82, 1.4),
                            new Point(1200, 2.6, 0.6),
                            new Point(1250, 2.6, 1.8),
                            new Point(1290, 2.65, 2.4),
                            new Point(1400, 6.4, 2.45),
                            new Point(1430, 6.35, 3.7),
                            new Point(1470, 3.5, 3.4),
                            new Point(1500, 4.15, 3.25),
                            new Point(1530, 2.5, 3.35),
                            new Point(1600, 0.15, 0.3)
                        ]
                    )
                ),
                new Path(
                    3244,
                    'blue',
                    new PointsCollection(
                        ...[
                            new Point(15, 0.05, 0.05),
                            new Point(34, 1, 0),
                            new Point(80, 0.05, 0.07),
                            new Point(44, 1, 0),
                            new Point(60, 0.5, 2),
                            new Point(77, 1.5, 3),
                            new Point(72, 2, 4.5)
                        ]
                    )
                ),
                new Path(
                    7255,
                    'grey',
                    new PointsCollection(
                        ...[
                            new Point(200, 8.5, 3.3),
                            new Point(130, 10, 5.56),
                            new Point(343, 4.3, 6.3),
                            new Point(175, 8.2, 5.3),
                            new Point(215, 7, 3.15),
                            new Point(315, 7.12, 5.44),
                            new Point(425, 9.48, 4.82),
                            new Point(330, 4.25, 5.3),
                            new Point(225, 7, 3.15),
                            new Point(415, 9.15, 4.08),
                            new Point(370, 3.3, 6.18),
                            new Point(395, 4.55, 2.15),
                            new Point(408, 9.2, 1.95),
                            new Point(433, 9.71, 4.85),
                            new Point(338, 4.3, 6.3),
                            new Point(360, 2.3, 6.22)
                        ]
                    )
                ),
                new Path(
                    3232,
                    'yellow',
                    new PointsCollection(
                        ...[
                            new Point(200, 3.4, 2.2),
                            new Point(100, 10, 1.3),
                            new Point(110, 8.46, 1.56),
                            new Point(120, 6.32, 1.34),
                            new Point(140, 3.2, 2.3),
                            new Point(290, 3.25, 4.3),
                            new Point(210, 2.12, 4.44),
                            new Point(260, 1.48, 4.82),
                            new Point(333, 7.15, 2.08),
                            new Point(315, 5, 3.15),
                            new Point(360, 9.8, 1.4)
                        ]
                    )
                ),
                new Path(
                    2323,
                    'green',
                    new PointsCollection(
                        ...[
                            new Point(200, 3.4, 2.1),
                            new Point(114, 1.45, 0.05),
                            new Point(120, 1.45, 0.96),
                            new Point(210, 3.77, 1.97),
                            new Point(140, 3.2, 2.15),
                            new Point(230, 4.92, 1.56),
                            new Point(250, 5.2, 0.84),
                            new Point(133, 2.32, 1.34),
                            new Point(270, 4.2, 0.14)
                        ]
                    )
                )
            ]
        );
    }
}