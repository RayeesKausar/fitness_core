import React from "react";
import { useState } from "react";
import {Link as RouterLink} from "react-router-dom";
import {FormGroup, Stack, TextField, Button, Checkbox, FormControlLabel, Link } from "@mui/material";
import { mockLogin } from "../../services/Auth/AuthService";

const validPasswordLength = 5;
const validateEmail = (value) => {
    // Basic regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
};

const validatePassword = (value) => {
    return value.length >= validPasswordLength;
}

export default function LoginForm () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [rememberme, setRememberme] = useState(false);
    const [loginError, setLoginError] = useState(false);

    

    function handleEmailChange(evt) {
        setEmail(evt.target.value);
    }

    function handlePasswordChange(evt) {
        setPassword(evt.target.value)
    }

    function handleRemembermeChange(evt) {
        setRememberme(evt.target.checked);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        const emailValid = validateEmail(email);
        const validPassword = validatePassword(password);
        setIsValidEmail(emailValid);
        setIsValidPassword(validPassword);

        if(!isValidEmail || !isValidPassword) {
            return;
        }
        mockLogin(email, password).then((res) => {
            alert(res);
            setLoginError(false);
        }).catch(() => {
            setLoginError(true);
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Stack component={FormGroup} spacing={5}>
                        <TextField
                            type="email"
                            label="Email"
                            variant="outlined"
                            onChange={handleEmailChange}
                            error={!isValidEmail}
                            helperText={!isValidEmail ? "Please enter a valid email addresss" : ""}

                        />
                        <TextField
                            type="password"
                            label="Password"
                            variant="outlined"
                            onChange={handlePasswordChange}
                            error={!isValidPassword}
                            helperText={!isValidPassword ? "Please enter valid password" : "Your password length must be grater than or equal " + validPasswordLength}
                        />
                        <FormControlLabel 
                            control={<Checkbox onChange={handleRemembermeChange} sx={{ p: 0, m: 0 }}/>} 
                            label="Remember me" 
                            checked={rememberme}
                            sx={{m: 0, p: 0}}
                        />

                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            size="large"
                        >
                            Login
                        </Button>
                    </Stack>
                </FormGroup>
            </form>
            <Link component={RouterLink} to="/register" sx={{mt: 2}} underline="none">
                Create Account
            </Link>
        </>
    )
}
