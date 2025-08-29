import React, { useState } from "react";
import { TextField, Button, Stack, FormGroup } from "@mui/material";
import { mockOtpVerify } from "../../services/Auth/AuthService";

const validatePhoneNumber = (value) => {
  // ✅ Indian number (10 digits, starts with 6-9)
  const regex = /^[6-9]\d{9}$/;
  return regex.test(value);
};

const validateOtp = (value) => {
    const regex = /^\d{4}$/; // 4 digit OTP
    return regex.test(value);
};

export default function({
    phone, 
    setPhone, 
    otp, 
    setOtp, 
    isPhoneValid, 
    setIsPhoneValid, 
    otpVerified, 
    setOtpVerified, 
    isOtpValid,
    setIsOtpValid,
    isOtpRequested, 
    setIsOtpRequested,
    isOtpVerificationRequested,
    setIsOtpVerificationRequested,
    otpMessage,
    setOtpMessage,
    onOtpVerified}) {


    function handlePhoneInput(evt) {
        evt.stopPropagation();
        const isValid = validatePhoneNumber(evt.target.value);
        setIsPhoneValid(isValid);
        
    }

    function handlePhoneChange(evt) {
        evt.stopPropagation();
        setPhone(evt.target.value);
    }

    function handleOTPChange(evt) {
        evt.stopPropagation();
        setOtp(evt.target.value);
    }

    function handleOTPInput(evt) {
        evt.stopPropagation();
        const isValid = validateOtp(evt.target.value);
        if(!isValid) {
            setOtpMessage("Otp is not valid");
        } else {
            setOtpMessage("Enter 4-digit otp");
        }
        setIsOtpValid(isValid);
        
    }

    function handleRequestOtp(evt) {
        evt.stopPropagation();
        if(!isOtpRequested) {
            setIsOtpRequested(true);
        }
        if(isOtpRequested) {
            setIsOtpVerificationRequested(true);
            mockOtpVerify(phone, otp).then((result) => {
                if(result.status === "Verified") {
                    setOtpVerified(true);
                    onOtpVerified();
                }
            }).catch((result) => {
                if(result.status === "Failed") {
                    setOtpVerified(false);
                    setOtpMessage("Otp verification failed");
                }
            })
        }
    }

    return (
        <Stack component={FormGroup} spacing={4}>
            <TextField
                label="Phone number"
                variant="outlined"
                value={phone}
                onChange={handlePhoneChange}
                onInput={handlePhoneInput}
                error={!isPhoneValid}
                helperText={isPhoneValid ? "" : "Please enter a valid phone number"}
                fullWidth
            />
            { isOtpRequested && <TextField
                    label="OTP"
                    variant="outlined"
                    value={otp}
                    onChange={handleOTPChange}
                    onInput={handleOTPInput}
                    error={!isOtpValid}
                    helperText={otpMessage}
                    hidden={!isOtpRequested}
                />
            }
            <Button
                type="submit"
                color="primary"
                variant="contained"
                size="large"
                disabled={!isOtpValid || !isPhoneValid}
                onClick={handleRequestOtp}
            >
                { isOtpRequested ? "Verify Otp" : "Request OTP"}
            </Button>
        </Stack>
    );
}