import React from "react";
import "./rds-button-grid.css";

export interface ButtonInput {
        id: string;
        text: string;
        colorVariant?: string;
    }

interface RdsButtonGridProps {
        rows: number;
        columns: number;
        colorVariant?: string;
        buttonInputs:any;
}

const RdsButtonGrid = (props: RdsButtonGridProps) => {

    const btnColorVariant = "btn fw-bold  mx-1 my-1 text-" + (props.colorVariant ? props.colorVariant : "white ");

    return ( 
        <div className="button-grid">
            {Array.from({ length: props.rows }).map((_, rowIndex) => (
                <div key={rowIndex} className="button-row"      >
                    {Array.from({ length: props.columns }).map((_, colIndex) => {
                        const buttonInput = props.buttonInputs[rowIndex * props.columns + colIndex];
                        return buttonInput ? (
                            <button
                                title={buttonInput.text}
                                key={colIndex}
                                className={` ${btnColorVariant} ${buttonInput.colorVariant ? " btn-" + buttonInput.colorVariant : ""} `}
                                // className={btnColorVariant}
                            >
                                {buttonInput.text}
                            </button>
                        ) : null;
                    })}
                </div>
            ))}
        </div>
    );
};

export default RdsButtonGrid;