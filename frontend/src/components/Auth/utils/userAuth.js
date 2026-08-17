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

export async function authenticateUser(result) {
    return {isVerified: true};
}