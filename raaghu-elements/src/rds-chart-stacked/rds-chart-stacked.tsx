import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./rds-chart-stacked.css";

export interface RdsStackedprops {
    labels: any[],
    options: any,
    dataSets: any[],
    height?: number,
    id: string
}

const RdsStackedChart = (props: RdsStackedprops) => {
const canvasRef = useRef<HTMLCanvasElement | null>(null);
useEffect(() => {
    const canvasElm = canvasRef.current;
    const ctx = canvasElm?.getContext("2d") as CanvasRenderingContext2D;

    if (ctx) {
        const stackedChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: props.labels,
                datasets: props.dataSets,
            },
            options: {
                     ...props.options,
                      maintainAspectRatio: false,
                     },
        });
        StackedCanvas.canvas.style.height = props.height + "px";
    });

return (
    <div className="stack-chart-container">
        <canvas data-testid={props.id} id={props.id} ref={canvasRef} />
    </div>
);
};

export default RdsStackedChart;