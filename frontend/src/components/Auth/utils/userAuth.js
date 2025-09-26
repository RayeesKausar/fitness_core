import { auth } from "../../../firebase";
import appConfig from "../../../config";

export async function authoriseUser(idToken) {
    if(!idToken) {
        console.error("no authenticated use found");
    }

    const payload = {
        idToken: idToken
    };

    const response = await fetch(`${appConfig.backendUrl}/api/auth/firebase`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
}

export async function authenticateUser(user) {
    if(!user) {
        console.error("no authentication found!!");
    }

    const response = await fetch(`${appConfig.backendUrl}/api/auth/fetchUserStatus/${user.phoneNumber}`);
    return response.json();
}