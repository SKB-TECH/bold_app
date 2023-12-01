import { BASE_URL } from "../../utils/config";
import {toastOption } from "../../utils";
import toast from "react-hot-toast";


export const getAllStatus = async () => {
        const response = await fetch(`${BASE_URL}/account/status/load`);
        const status = await response.json();
        return status.data
}
export const createUser = async (userData :any) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userData)
    };
    const response = await fetch(`${BASE_URL}/user/`, options);
    const result = await response.json();
    return result;
}

export const login = async (credintials : any) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(credintials)
    };

    const response = await toast.promise(fetch(`${BASE_URL}/login`, options), toastOption)
    const result = await response.json();

    return result
}

export const verify = async (verifyData:any) => {
    const response = await fetch(`${BASE_URL}/account/verify`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json;  application/x-www-form-urlencoded",
            "Accept": "application/json"
        },
        body: JSON.stringify(verifyData)
    })
    const result = await response.json();
    return result
}


export const verifyPwd = async (recData :any) => {
    const updatePassword = await fetch(`${BASE_URL}/account/verify_update`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json;  application/x-www-form-urlencoded",
            "Accept": "application/json"
        },
        body: JSON.stringify(recData)
    })
    const result = await updatePassword.json();
    return result
}

export const updatePwd = async (password : string, token : string) => {
    const updatePassword = await fetch(`${BASE_URL}/account/update_password`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json;  application/x-www-form-urlencoded",
            "Accept": "application/json",
            Authorization: `Bearer ${token}`

        },
        body: JSON.stringify(password)
    })
    const result = await updatePassword.json();
    return result
}

export const recoveryPwd = async (data: any) => {
    const response = await fetch(`${BASE_URL}/account/update-password`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    })
    const result = await response.json();
    return result
}


export const recoveryPwdToken = async (data:any, token:string) => {
    const response = await fetch(`${BASE_URL}/account/update-password-user`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    const result = await response.json();
    return result
}

export const recovery = async (phone:any) => {
    const response = await fetch(`${BASE_URL}/account/recover`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(phone)
    })
    const result = await response.json();
    return result
}

export const getAllUsers = async (token:string) => {
    const response = await fetch(`${BASE_URL}/user/all`, {
        headers: { Authorization: `Bearer ${token}` }
    }
    )
    const data = await response.json()
    return data
}

export const valideAccount = async (id_account:any, status:boolean, token:string) => {
    const response = await fetch(`${BASE_URL}/user/validate`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ idUser:id_account, status })
    })
    const result = await response.json();
    return result
}

export const updateUser = async (newData:any, token:string) => {
    const response = await fetch(`${BASE_URL}/user/`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newData)
    })
    const result = await response.json();
    return result
}

export const deleteUser = async (id_account:string, token:string) => {
    const response = await fetch(`${BASE_URL}/user/${id_account}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorization: `Bearer ${token}`
        },
    })
    const result = await response.json();
    return result
}