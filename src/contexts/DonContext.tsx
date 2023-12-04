/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { useState, createContext } from 'react';
import { errorMessageHadler } from '../utils';
import axios from 'axios';
import { BASE_URL } from '../utils/config';
import { useNavigationContext } from './NavigationContext';
import { useUserContext } from './UserContext';


type ArticleContextValue = {
    don: any[];
}
type ArticleContextProviderProps = {
    children: React.ReactNode;
}

export const DonContext = createContext<ArticleContextValue | null>(null);

export default function DonContextProvider({ children }: ArticleContextProviderProps) {
    const [don, setDon] = useState([]);
    // @ts-ignore
    const { setLoading } = useNavigationContext();
    //@ts-ignore
    const {token}=useUserContext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const allDon = async () => {
        try {
            setLoading(true);
            const res = await axios.get(BASE_URL+'/don/all',{
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    Authorization: `Bearer ${token}`
                },})
            if (res.status === 100) {
                setDon(res?.data?.data);
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            errorMessageHadler(error)
        }
    }

    useEffect(() => {
        let send=true;
        allDon()
        return ()=>{
            send=false;
        }
    },[])

    return (
        <DonContext.Provider value={{ don }}>
            {children}
        </DonContext.Provider>
    )
}


export function useADonContext() {
    const context = React.useContext(DonContext);
    if (context === undefined) {
        throw new Error("useUserNavigation must be used within a UserContextProvider")
    }
    return context;
}

