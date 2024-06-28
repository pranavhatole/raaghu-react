import { RdsButton, RdsInput } from "../rds-elements";
import React, { useEffect, useState } from "react";

export interface RdsCompChangePasswordProps {
    onSaveHandler?: (data: any) => void;
    reset?: boolean;
    changePasswordData?: any;
}
  const RdsCompChangePassword = (props: RdsCompChangePasswordProps) => {
    const [formData, setFormData] = useState(props.changePasswordData);
    const [inputReset, setInputReset] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setFormData(props.changePasswordData);
    }, [props.changePasswordData]);

    useEffect(() => {
        setInputReset(!inputReset);
    }, [props.reset]);

    const handleDataChanges = (value: any, key: string) => {
        setFormData({ ...formData, [key]: value });
        if (key === 'newPasswordConfirm' && value !== formData.newPassword) {
            setErrorMessage('New password and confirm new password do not match');
        } else {
            setErrorMessage('');
        }
    };

    function emitSaveData(event: any) {
        event.preventDefault();
        props.onSaveHandler && props.onSaveHandler(formData);
        setInputReset(!inputReset);
        setFormData({
            currentPassword: "",
            newPassword: "",
            newPasswordConfirm: "",
        });
    }

    return (
        <form data-testid="password-form">
            <div className="custom-content-scroll">
            <div className="row mt-4">
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-12">
                    <RdsInput
                        size="medium"
                        reset={inputReset}
                        label="Current Password"
                        inputType="password"
                        isDisabled={false}
                        readonly={false}
                        placeholder="Current Password"
                        value={formData?.currentPassword}
                        onChange={(e) => {
                            handleDataChanges(e.target.value, "currentPassword");
                          }}
                        required={true}
                        dataTestId='curr-password'
                        showIcon={true}
                    ></RdsInput>
                </div>
            </div>
            <div className="row">
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-12">
                    <RdsInput
                        size="medium"
                        reset={inputReset}
                        label="New Password"
                        inputType="password"
                        isDisabled={false}
                        readonly={false}
                        required={true}
                        placeholder="New Password"
                        value={formData?.newPassword}
                        onChange={(e) => {
                            handleDataChanges(e.target.value, "newPassword");
                          }}
                        dataTestId='new-pass'
                        showIcon={true}
                    ></RdsInput>
                </div>
            </div>           
            <div className="row">
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-12">
                    <RdsInput
                        size="medium"
                        reset={inputReset}
                        label="New Password Confirm"
                        inputType="password"
                        isDisabled={false}
                        readonly={false}
                        required={true}
                        placeholder="New Password Confirm"
                        value={formData?.newPasswordConfirm}
                        onChange={(e) => {
                            handleDataChanges(e.target.value, "newPasswordConfirm");
                          }}
                        dataTestId='confirm-password'
                        showIcon={true}
                    ></RdsInput>
                    <div className="form-control-feedback">
                            {errorMessage && (<span className="text-danger">{errorMessage}</span>)}
                        </div>
                </div>
            </div>
            </div>
            <div className="d-flex flex-column-reverse ps-4 flex-lg-row flex-md-column-reverse flex-row flex-xl-row flex-xxl-row footer-buttons gap-2 mt-3 pb-3">
                        <RdsButton
                            class="me-2"
                            tooltipTitle={""}
                            type={"button"}
                            label="Cancel"
                            colorVariant="outline-primary"
                            size="small"
                            databsdismiss="offcanvas"
                            dataTestId="cancel"
                        ></RdsButton>
                        <RdsButton
                            class="me-2"
                            label="Save"
                            size="small"
                            colorVariant="primary"
                            tooltipTitle={""}
                            type={"submit"}
                            onClick={(e: any) => emitSaveData(e)}
                            databsdismiss="offcanvas"
                            isDisabled={false}
                            dataTestId="save"
                        ></RdsButton>
            </div>
        </form>
    );
};


export default RdsCompChangePassword;
