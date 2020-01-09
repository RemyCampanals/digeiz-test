import React, { useRef, useEffect, useCallback } from 'react';
import * as d3 from 'd3';

import {Path} from '../../Domain/Path';
import {Point} from '../../Domain/Point';

interface ID3MapProps {
    paths: Path[]
}

export const D3Map: React.FunctionComponent<ID3MapProps> = ({ paths }) => {
    const mapRef = useRef<SVGSVGElement | any>();

    const getMaxCoordinates = useCallback((): [number, number] => {
        let maxXCoordinate: number = 0;
        let maxYCoordinate: number = 0;

        paths.forEach((path: Path) => {
            const maxCoordinates = path.points.getMaxCoordinates();
            if (maxCoordinates[0] > maxXCoordinate) {
                maxXCoordinate = maxCoordinates[0];
            }
            if (maxCoordinates[1] > maxYCoordinate) {
                maxYCoordinate = maxCoordinates[1];
            }
        });

        return [maxXCoordinate, maxYCoordinate];
    }, [paths]);

    useEffect(() => {
        const svgElement = d3.select(mapRef.current);
        svgElement.attr('viewBox', '0 0 500 500');
        svgElement.attr('fill', 'red');
        
        const maxCoordinates = getMaxCoordinates();
        const xScale = d3.scaleLinear().domain([0, Math.ceil(maxCoordinates[0])]).range([0, 480]);
        const yScale = d3.scaleLinear().domain([0, Math.ceil(maxCoordinates[1])]).range([0, 480]);
        const axisBottomGenerator = d3.axisBottom(xScale);
        const axisRightGenerator = d3.axisRight(yScale);

        svgElement.append('g').call(axisRightGenerator);
        svgElement.append('g').call(axisBottomGenerator);

        const lines: d3.Path[] = [];
        
        paths.forEach((path: Path) => {
            const line: d3.Path = d3.path();

            path.points.forEach((point: Point, index: number) => {
                if (index === 0) {
                    line.moveTo((point.x * 480) / maxCoordinates[0], (point.y * 480) / maxCoordinates[1]);
                } else if (index === path.points.length - 1) {
                    line.moveTo((point.x * 480) / maxCoordinates[0], (point.y * 480) / maxCoordinates[1]);
                    line.closePath();
                } else {
                    line.lineTo((point.x * 480) / maxCoordinates[0], (point.y * 480) / maxCoordinates[1]);
                }
            });

            lines.push(line);
        });

        lines.forEach((line: d3.Path, index: number) => {

            svgElement
                .append('path')
                .attr('d', line.toString())
                .attr('stroke', paths[index].strokeColor)
                .attr('strokeWidth', 2)
                .attr('fill', 'none');
        })

    }, [paths, getMaxCoordinates]);

    return <svg ref={ mapRef } />;
}