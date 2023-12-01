import React, { useEffect } from 'react';
import { useState, createContext } from 'react';
import toast from 'react-hot-toast';
import { getAllUsers, login, recoveryPwdToken, updateUser, valideAccount } from './api/user';
import { errorMessageHadler, getLocalStorageItem, removeLocalStorageItem, saveToLocalStorage, toastOption } from '../utils';
import axios from 'axios';
import { BASE_URL } from '../utils/config';

type UserContextValue = {
    userConnected: any;
    token: any;
    users: any[];
    setUserConnected: React.Dispatch<React.SetStateAction<any>>;
    handleLogin: (inputs: any, navigate: any) => void
    allUsers: (token: string) => void
    logOut: (navigate: any) => void
}
type UserContextProviderProps = {
    children: React.ReactNode;
}

export const UserContext = createContext<UserContextValue | null>(null);

export default function UserContextPRovider({ children }: UserContextProviderProps) {
    const [userConnected, setUserConnected] = useState(null);
    const [token, setToken] = useState(null);
    const [users, setUsers] = useState([]);

    const handleLogin = async (inputs: any, navigate: any) => {
        try {
            const res = await toast.promise(axios.post(BASE_URL + '/login', inputs), toastOption)
            if (res.status == 200) {
                setUserConnected(res.data.data.user);
                setToken(res.data.data.token);
                saveToLocalStorage(res.data.data.user, "user");
                saveToLocalStorage(res.data.data.token, "token");
                navigate("/bold/dashboard");
            }
        } catch (error) {
            errorMessageHadler(error)
        }
    }

    const allUsers = async (token: string) => {
        try {
            const usersData = await getAllUsers(token);
            if (usersData.status === 200)
                setUsers(usersData.data);
        } catch (error) {
            errorMessageHadler(error)
        }
    }

    const activeUser = async (id: string, state: boolean, token: string) => {
        try {
            const res = await toast.promise(valideAccount(id, state, token), toastOption);
            if (res.status == 200) {
                allUsers(token);
            }
        } catch (e) {
            errorMessageHadler(e)
        }
    }

    const updateProfil = async (newUserData: any, token: string) => {
        try {
            const res = await toast.promise(updateUser(newUserData, token), toastOption);
            if (res.status == 200) {
                allUsers(token);
            }
        } catch (e) {
            errorMessageHadler(e)
        }
    }


    const forgetPwd = async (newUserData: string, token: string) => {
        try {
            const res = await toast.promise(recoveryPwdToken(newUserData, token), toastOption);
            if (res.status == 200) {
                allUsers(token);
            } else {
                toast.error(res.message);
            }
        } catch (e) {
            errorMessageHadler(e)
        }
    }

    const logOut = (navigate: any) => {
        removeLocalStorageItem("user");
        removeLocalStorageItem("token");
        navigate("/bold/login")
        setUserConnected(null)
        setToken(null)
    }
    const getUserLocal = () => {
        const localUserData = getLocalStorageItem("user");
        const localToken = getLocalStorageItem("token");
        setUserConnected(localUserData);
        setToken(localToken);
    };

    useEffect(() => {
        getUserLocal();
    }, [])

    return (
        <UserContext.Provider value={{ users, userConnected, token, setUserConnected, handleLogin, allUsers, logOut }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext() {
    const context = React.useContext(UserContext);

    if (context === undefined) {
        throw new Error("useUserNavigation must be used within a UserContextProvider")
    }
    return context;
}

