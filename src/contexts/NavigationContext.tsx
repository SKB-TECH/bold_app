import React from 'react';
import { useState, createContext } from 'react';

type NavigationContextValue = {
    loading: boolean;
    openDialog: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}
type NavigationContextProviderProps = {
    children: React.ReactNode;
}

export const NavigationContext = createContext<NavigationContextValue | null>(null);

export default function NavigationContextProvider({ children }: NavigationContextProviderProps){
    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    return (
        <NavigationContext.Provider value={{ loading, openDialog, setLoading, setOpenDialog }}>
            {children}
        </NavigationContext.Provider>
    )
}

export function useNavigationContext() {
    const context = React.useContext(NavigationContext);

    if (context === undefined) {
        throw new Error("useNavigationContext must be used within a NavigationContextProvider")
    }
    return context;
}

