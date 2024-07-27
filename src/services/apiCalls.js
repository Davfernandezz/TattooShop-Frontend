
const URL = 'http://localhost:4000/api'

export const registerUser = async (credentials) => {
    try {
        const request = await fetch(`${URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
        const result = await request.json();
        return result;
    } catch (error) {

    }
}


export const loginUser = async (credentials) => {
    try {
        const request = await fetch(`${URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
        const result = await request.json();
        return result;
    } catch (error) {

    }
}

export const getUserProfile = async (token) => {
    try {
        const response = await fetch(`${URL}/users/profile`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        return await response.json()
    } catch (error) {

    }
}

export const updateProfile = async (changes, token) => {
    try {
        const response = await fetch(`${URL}/profile/update`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(changes),
        });
        return await response.json()
    } catch (error) {

    }
}

export const getUsers = async (token) => {
    try {
        const response = await fetch(`${URL}/users`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        return await response.json()
    } catch (error) {

    }
}

export const deleteUserById = async (token, id) => {
    try {
        const response = await fetch(`${URL}/users/${+id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        return await response.json()
    } catch (error) {

    }
}

export const createAppointments = async (credentials) => {
    try {
        const request = await fetch(`${URL}/appointments/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(credentials),
        });
        const result = await request.json();
        return result;
    } catch (error) {

    }
}

export const getAppointmentsUser = async (token) => {
    try {
        const response = await fetch(`${URL}/appointments/user`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching appointments:", error);
        throw error;
    }
};

export const deleteAppointmentsUser = async (credentials) => {
    try {
        const response = await fetch(`${URL}/appointments/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });
        return await response.json();
    } catch (error) {

    }
}