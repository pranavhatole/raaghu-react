import React, { useState } from "react";
import "./rds-stepper.css";
import RdsCheckbox from "../rds-checkbox/rds-checkbox";


interface StepperDetail {
    label: string;
    subtitle: string;
  detail?: {
    subtitle: string;
  };
}
export interface RdsStepperProps {
    detail: any;
    stepperType?: string;
  stepperDetails?: StepperDetail[];
  showSubtitles?: boolean;
}
const RdsStepper = (props: RdsStepperProps) => {
    const [page, setPage] = useState(1);
    const [checkedStates, setCheckedStates] = useState<boolean[]>(Array(props.stepperDetails?.length).fill(false));
    const formTitles = [
        { stepName: "Step 1", stepabname: "Profile" },
        { stepName: "Step 2", stepabname: "Positions" },
        { stepName: "Step 3", stepabname: "Settings" },
    ];

    const increasePageCountHandler = () => {
        if (page <= formTitles.length) {
            setPage(page + 1);
            setCheckedStates((prevStates) => {
                const newStates = [...prevStates];
                if (page - 1 < newStates.length) {
                    newStates[page - 1] = true;
                  }
                return newStates;
              });
        }
    };

    const decreasePageCountHandler = () => {
        if (page > 1) {           
            setCheckedStates((prevStates) => {
                const newStates = [...prevStates];
                if (page - 2 >= 0) {
                    newStates[page - 2] = false;
                  }
                return newStates;
              });
            setPage(page - 1);
        }
    };

    const formLength = formTitles.length;
    const dotPosition = `${100 / formLength}`;
    const progressIndex = `${(100 / formLength) * (page - 1)}%`;

    return (
        <>
            {props.stepperType == "simple" && (
                <>
                    <div className="progressBar">
                        <div className="h-100"
                            style={{
                                background: "#336cff",
                                width: progressIndex,
                            }}
                        ></div>
                        {formTitles.map((formItem, idx, arr) => (
                            <>
                                {idx < arr.length - 1 ? (
                                    <span
                                        className="dot"
                                        style={{ left: `${parseFloat(dotPosition) * (idx + 1)}%` }}
                                    ></span>
                                ) : (
                                    ""
                                )}
                            </>
                        ))}
                    </div>

                    <div className="d-flex mt-2">
                        {formTitles.map((FormItem) => (
                            <>
                                <div style={{ width: `${dotPosition}%` }} className="ps-3">
                                    <div style={{ fontSize: "20px", color: "#336cff" }}>{FormItem.stepName}</div>
                                    <div style={{ fontSize: "20px" }}>{FormItem.stepabname}</div>
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="mt-5">
                <button
                    disabled={page === 1}
                    className="btn btn-primary btn-sm me-2"
                    onClick={decreasePageCountHandler}
                >
                    Prev
                </button>
                <button
                    disabled={page === formTitles.length + 1}
                    className="btn btn-primary btn-sm"
                    onClick={increasePageCountHandler}
                >
                    Next
                </button>
            </div>
                </>
            )}
 {props.stepperType == "withcheckbox" && (
                <>
                    <div>
            {props.stepperDetails?.map((detail, index) => (
                <div key={index} className="mb-3">
                    <RdsCheckbox
                        classes="py-2"
                        label={detail.label}
                        state="Checkbox"
                        type="Square"
                        id={`projectDetailsCheckbox-${index}`}
                        checked={checkedStates[index]}
                        dataTestId={`projectDetails-${index}`} isDisabled={true}
                    ></RdsCheckbox>
                    {checkedStates[index] && props.showSubtitles && <div>{detail.subtitle}</div>}
                </div>
            ))}
                    </div>
         
                    <div className="mt-5">
                <button
                    disabled={page === 1}
                    className="btn btn-primary btn-sm me-2"
                    onClick={decreasePageCountHandler}
                >
                    Prev
                </button>
                <button
                    disabled={page === formTitles.length + 1}
                    className="btn btn-primary btn-sm"
                    onClick={increasePageCountHandler}
                >
                    Next
                </button>
            </div>
                    
                </>
            )}
            
        </>
    );
};

export default RdsStepper;
