const BASE_URL = "https://api.openf1.org/v1";

export const getDrivers = async () => {
    const response = await fetch(`${BASE_URL}/drivers?session_key=latest`);
    const data = await response.json();
    return data;
};