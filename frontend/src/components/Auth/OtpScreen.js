import React from "react";
import { TextField, Button, Stack, FormGroup } from "@mui/material";

const isDev = true;

const validatePhoneNumber = (value) => {
  // ✅ Indian number (10 digits, starts with 6-9)
  if(isDev) {
    return true;
  }
  const regex = /^[6-9]\d{9}$/;
  return regex.test(value);
};

const validateOtp = (value) => {
    const regex = /^\d{6}$/; // 4 digit OTP
    return regex.test(value);
};


export default function OtpScreen({
    phone, 
    setPhone, 
    otp, 
    setOtp, 
    isPhoneValid, 
    setIsPhoneValid,
    isOtpValid,
    setIsOtpValid,
    isOtpRequested, 
    setIsOtpRequested,
    isOtpVerificationRequested,
    setIsOtpVerificationRequested,
    otpMessage,
    setOtpMessage,
    onOtpVerify}) {


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
            setOtpMessage("Enter 6-digit otp");
        }
        setIsOtpValid(isValid);
        
    }

    const requestOtp = async () => {
        if (!isPhoneValid) {
            setOtpMessage("Enter a valid phone number");
            return;
        }
        try {
            setIsOtpRequested(true);
            setOtpMessage("OTP sent to your phone");
        } catch (err) {
            console.error(err);
            setOtpMessage(err.message || "Failed to send OTP");
        }
    };

    // ✅ Verify OTP
    const verifyOtp = async () => {
        if (!isOtpValid) {
            setOtpMessage("Enter a valid 6-digit OTP");
            return;
        }
        try {
            setOtpMessage("Phone number verified ✅");
            await onOtpVerify({isVerified: true});
        } catch (err) {
            setOtpMessage(err.message || "Failed to verify OTP");
        }
    };

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
            {!isOtpRequested ? (
                <Button
                variant="contained"
                color="primary"
                disabled={!isPhoneValid}
                onClick={requestOtp}
                >
                Request OTP
                </Button>
            ) : (
                <Button
                variant="contained"
                color="secondary"
                disabled={!isOtpValid}
                onClick={verifyOtp}
                >
                Verify OTP
                </Button>
            )}
        </Stack>
    );
}