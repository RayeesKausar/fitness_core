import React from "react";
import { useState } from "react";
import {Link as RouterLink} from "react-router-dom";
import {FormGroup, Link } from "@mui/material";
import OtpScreen from "./OtpScreen";
import { authenticateUser } from "./utils/userAuth";

export default function LoginForm () {
    const[phone, setPhone] = useState("");
    const[otp, setOtp] = useState("");
    const[isPhoneValid, setIsPhoneValid] = useState(true);
    const[isOtpValid, setIsOtpValid] = useState(true);
    const[otpVerified, setOtpVerified] = useState(false);
    const[isOtpRequested, setIsOtpRequested] = useState(false);
    const[otpMessage, setOtpMessage] = useState("Enter 4-digit otp");
    const [errorMessage, setErrorMessage] = useState("");


    async function handleOtpVerification(result) {
        let response = await authenticateUser(result);
        if(response.errorObject && response.errorObject.error) {
            setErrorMessage(errorMessage || "some backend error");
            return;
        } 
        if(!response.isVerified) {
            //TODO handle the case
        } else {
            setOtpVerified(true);
            console.log(otpVerified);
        }
    }

    return (
        <>
            <form>
                <FormGroup>
                    <OtpScreen
                        phone={phone}
                        setPhone={setPhone}
                        otp={otp}
                        setOtp={setOtp}
                        isPhoneValid={isPhoneValid}
                        setIsPhoneValid={setIsPhoneValid}
                        isOtpValid={isOtpValid}
                        setIsOtpValid={setIsOtpValid}
                        isOtpRequested={isOtpRequested}
                        setIsOtpRequested={setIsOtpRequested}
                        otpMessage={otpMessage}
                        setOtpMessage={setOtpMessage}
                        onOtpVerify={handleOtpVerification}
                    />
                </FormGroup>
            </form>
            <Link component={RouterLink} to="/register" sx={{mt: 2}} underline="none">
                Create Account
            </Link>
        </>
    )
}
