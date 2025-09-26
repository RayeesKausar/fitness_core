import React from "react";
import { useState } from "react";
import OtpScreen from "./OtpScreen";
import BasicDetailsScreen from "./BasicDetailsScreen";
import FitnessDetailsForm from "./FitnessDetailsForm";
import { Stack, Button } from "@mui/material";
import { authoriseUser } from "./utils/userAuth";



export default function RegistrationForm () {

    //Registration form
    const[phone, setPhone] = useState("");
    const[otp, setOtp] = useState("");
    const[isPhoneValid, setIsPhoneValid] = useState(true);
    const[isOtpValid, setIsOtpValid] = useState(true);
    const[otpVerified, setOtpVerified] = useState(false);
    const[isOtpRequested, setIsOtpRequested] = useState(false);
    const[screen, setScreen] = useState(0);
    const[isOtpVerificationRequested, setIsOtpVerificationRequested] = useState(false);
    const[otpMessage, setOtpMessage] = useState("Enter 6-digit otp");

    //Basic details form
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");

    //Fitness details form
    const [height, setHeight] = useState();
    const [heightUnit, setHeightUnit] = useState("cm");
    const [weight, setWeight] = useState();
    const [weightUnit, setWeightUnit] = useState("kg");
    const [goal, setGoal] = useState("");
    const [activity, setActivity] = useState("");
    const [medical, setMedical] = useState("");


    function handleSubmit(evt) {
        evt.preventDefault();
    }

    async function handleOtpVerification(userCredential) {
        const user = userCredential.user;
        const idToken = await user.getIdToken();
        await authoriseUser(idToken);
        setOtpVerified(true);
        setScreen(1);
    }

    function handlePrevious(evt) {
        evt.stopPropagation();
        if(screen > 1) {
            setScreen(screen-1);
        }
    }

    function handleNext(evt) {
        evt.stopPropagation();
        setScreen(screen+1);
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
                    onOtpVerify={handleOtpVerification}
                />
            }
            {(otpVerified && screen === 1) &&
                <BasicDetailsScreen
                    firstName = {firstName}
                    setFirstName = {setFirstName}
                    lastName = {lastName}
                    setLastName = {setLastName}
                    dateOfBirth = {dateOfBirth}
                    setDateOfBirth = {setDateOfBirth}
                    gender = {gender}
                    setGender = {setGender}
                    email = {email}
                    setEmail = {setEmail}
                />
            }

            {(otpVerified && screen === 2) &&
                <FitnessDetailsForm
                    height={height}
                    setHeight={setHeight}
                    heightUnit={heightUnit}
                    setHeightUnit={setHeightUnit}
                    weight={weight}
                    setWeight={setWeight}
                    weightUnit={weightUnit}
                    setWeightUnit={setWeightUnit}
                    goal={goal}
                    setGoal={setGoal}
                    activity={activity}
                    setActivity={setActivity}
                    medical={medical}
                    setMedical={setMedical}
                />
            }

            {screen > 0 && (
                <Stack direction="row" spacing={2} mt={3} justifyContent="space-between">
                    <Button disabled={screen <= 1} variant="outlined" onClick={handlePrevious}>
                        Previous
                    </Button>
                    <Button variant="contained" onClick={handleNext}>
                        Next
                    </Button>
                </Stack>
            )}

        </form>
    );
}