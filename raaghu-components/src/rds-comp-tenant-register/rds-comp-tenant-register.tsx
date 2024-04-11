import React, { useEffect, useState } from "react";
import {
    RdsButton,
    RdsInput,
    RdsCheckbox,
    RdsIcon,
    RdsDropdownList,
    RdsLabel,
} from "../rds-elements";

const RdsCompTenantRegister = (props: any) => {

    const [registerFormData, setRegisterFormData] = useState(props.registerData);
    const [countryList, setCountryList] = useState(props.countryFlagList);
    const [isLoginClicked, setIsLoginClicked] = useState(false);
    const [isCheckTerms, setIsCheckTerms] = useState(false);

    useEffect(() => {
        setCountryList(props.countryFlagList);
    }, [props.countryFlagList]);

    const isEmailValid = (email: any) => {
        if (!email || email.length === 0) {
            return false;
        }
        return true;
    };

    const isPasswordValid = (password: any) => {
        if (!password || password.length === 0) {
            return false;
        }
        return true;
    };

    const isNameValid = (name: any) => {
        return name && name.length > 0;
    };

    const isCountryValid = (countryId: any) => {
        return countryId !== undefined;
    };

    const isZipCodeValid = (zipCode: any) => {
        return zipCode && zipCode.length > 0;
    };

    const isFormValid =
        isEmailValid(registerFormData?.adminEmailAddress) &&
        isPasswordValid(registerFormData?.adminPassword) &&
        isNameValid(registerFormData?.name) &&
        isCountryValid(registerFormData?.countryCode) &&
        isZipCodeValid(registerFormData?.zipCode) && isCheckTerms;


    const loginHandler: any = (isLoginClicked: boolean) => {
        setIsLoginClicked(false);
        props.onLogin(false);
    };

    useEffect(() => {
        setRegisterFormData(props.registerData);
    }, [props.registerData]);

    const handleRegisterDataChanges = (value: any, key: string) => {
        setRegisterFormData({ ...registerFormData, [key]: value });
    }

    const handleRegisterDataSubmit = (event: any) => {
        event.preventDefault();
        props.handleRegisterDataSubmit(registerFormData, () => {
        // This function will be called when the form is successfully submitted
        props.onIncreasePageCount();
        });
    };

    return (
        <div>
            <div className="text-center">

                <div>
                    <form onSubmit={handleRegisterDataSubmit}>
                        <div className="form-group text-start">
                            <RdsInput
                                label="Organization Name"
                                placeholder="Enter Organization Name"
                                inputType="text"
                                required={true}
                                name={"name"}
                                value={registerFormData?.name}
                                dataTestId="name"
                                onChange={(e: any) => handleRegisterDataChanges(e.target.value, "name")}
                            />
                        </div>

                        <div className="form-group text-start">
                            <RdsInput
                                label="Email"
                                placeholder="Enter Email"
                                inputType="email"
                                onChange={(e: any) => handleRegisterDataChanges(e.target.value, "adminEmailAddress")}
                                value={registerFormData?.adminEmailAddress}
                                name={"email"}
                                required={true}
                                dataTestId="email"
                                validatonPattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
                            ></RdsInput>
                        </div>

                        <div className="form-group text-start ">
                            <RdsInput
                                required={true}
                                label="Password"
                                placeholder="Enter Password"
                                inputType="password"
                                onChange={(e: any) => handleRegisterDataChanges(e.target.value, "adminPassword")}
                                name={"password"}
                                value={registerFormData?.adminPassword}
                                dataTestId="password"
                                showIcon={true}
                            ></RdsInput>
                        </div>

                        <div className="row text-start">
                            <div className="col-md-6">
                                <RdsLabel label="Country" required={true} />
                                <RdsDropdownList
                                    placeholder="Select Country"
                                    isPlaceholder={true}
                                    multiSelect={false}
                                    borderDropdown={true}
                                    listItems={countryList}
                                    id={"countryList"}
                                    onClick={(e: any, val: any) => handleRegisterDataChanges(val, "countryCode")}
                                />
                            </div>
                            <div className="col-md-6">
                                <RdsInput
                                    required={true}
                                    label="Zip Code"
                                    placeholder="Enter Zip Code"
                                    inputType="text"
                                    value={registerFormData?.zipCode}
                                    onChange={(e: any) => handleRegisterDataChanges(e.target.value, "zipCode")}
                                ></RdsInput>
                            </div>
                        </div>

                        <div className="pb-4">
                            <RdsCheckbox
                                id="id1"
                                label="I Accept Terms Of Service"
                                state="Checkbox"
                                withlabel
                                checked={isCheckTerms}
                                onChange={(e: any) => setIsCheckTerms(e.target.checked)}
                            />
                        </div>

                        <RdsButton
                            label="Register"
                            colorVariant="primary"
                            showLoadingSpinner={true}
                            block={true}
                            tooltipTitle={""}
                            type="submit"
                            dataTestId="register"
                            isDisabled={!isFormValid}
                            onClick={handleRegisterDataSubmit} // Call handleRegisterDataSubmit directly
                        />
                        <div className="mt-3">
                            <p> Already Have An Account?<span className="ps-2"><a
                                className="link-primary text-decoration-none"
                                href="javascript:void(0)"
                                onClick={() => loginHandler(isLoginClicked)}
                                data-testid="login"
                            >Login
                            </a></span></p>
                        </div>
                    </form>
                    <div className="pt-2">
                        <p className="divider line one-line">Or Connect With</p>
                        <div className="w-100 mt-4 pt-2">
                            <span className="w-20px h-20px border p-2 mx-3 rounded-2">
                                <RdsIcon
                                    name="google"
                                    height="20px"
                                    width="20px"
                                    colorVariant="light"
                                    fill={false}
                                    stroke={true}
                                    tooltip={true}
                                    tooltipTitle={"Connect with Google"}
                                    tooltipPlacement="bottom"
                                ></RdsIcon></span>
                            <span className="w-20px h-20px border p-2 mx-3 rounded-2">
                                <RdsIcon
                                    name="microsoft"
                                    height="20px"
                                    width="20px"
                                    colorVariant="light"
                                    fill={false}
                                    stroke={false}
                                    tooltip={true}
                                    tooltipTitle={"Connect with Microsoft"}
                                    tooltipPlacement="bottom"
                                ></RdsIcon>
                            </span>
                        </div>
                    </div>
                    {/* <div className="pt-2">
                        <RdsLabel
                            class="text-mute pt-2 secondary "
                            label="©2023 WAi Technologies. All rights reserved "
                            size="0.7rem"
                        ></RdsLabel>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default RdsCompTenantRegister;