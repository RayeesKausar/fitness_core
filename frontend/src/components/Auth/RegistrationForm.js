import React from "react";
import { useState } from "react";
import OtpScreen from "./OtpScreen";
import BasicDetailsScreen from "./BasicDetailsScreen";



export default function RegistrationForm () {
    const[phone, setPhone] = useState("");
    const[otp, setOtp] = useState("");
    const[isPhoneValid, setIsPhoneValid] = useState(true);
    const[isOtpValid, setIsOtpValid] = useState(true);
    const[otpVerified, setOtpVerified] = useState(false);
    const[isOtpRequested, setIsOtpRequested] = useState(false);
    const[screen, setScreen] = useState(0);
    const[isOtpVerificationRequested, setIsOtpVerificationRequested] = useState(false);
    const[otpMessage, setOtpMessage] = useState("Enter 4-digit otp");


    function handleSubmit(evt) {
        evt.preventDefault();
    }

    function handleOtpVerified() {
        setScreen(1);
    }

    return (
        <form onSubmit={handleSubmit}>
            { !otpVerified &&
                <OtpScreen
                    phone={phone}
                    setPhone={setPhone}
                    otp={otp}
                    setOtp={setOtp}
                    isPhoneValid={isPhoneValid}
                    setIsPhoneValid={setIsPhoneValid}
                    otpVerified={otpVerified}
                    setOtpVerified={setOtpVerified}
                    isOtpValid={isOtpValid}
                    setIsOtpValid={setIsOtpValid}
                    isOtpRequested={isOtpRequested}
                    setIsOtpRequested={setIsOtpRequested}
                    isOtpVerificationRequested={isOtpVerificationRequested}
                    setIsOtpVerificationRequested={setIsOtpVerificationRequested}
                    otpMessage={otpMessage}
                    setOtpMessage={setOtpMessage}
                    onOtpVerified={handleOtpVerified}
                />
            }
            {(otpVerified && screen === 1) &&
                <BasicDetailsScreen/>
            }

        </form>
    );
}