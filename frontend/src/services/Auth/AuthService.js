export function mockLogin(email, password) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(email === "example@gmail.com" && password === "abcde") {
                resolve("Login success");
            } else {
                reject("invalid credentials");
            }
        }, 2000);
    }); 
}

export function mockOtpVerify(phone, otp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(otp === "1234") {
                resolve({status: "Verified"});
            } else {
                reject({status: "Failed"});
            }
        }, 3000);
    })
}