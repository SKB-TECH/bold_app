import { useState, createContext } from 'react';

type NavigationContextValue = {
    loading: boolean;
    openDialog: boolean,
    handleOpenDialog: () => void;
    handleLoading: () => void;
}

export const NavigationContext = createContext<NavigationContextValue | undefined>(undefined);

const NavigationContextProvider = ({ children }: any) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(!openDialog);
    }
    const handleLoading = () => {
        setLoading(!loading);
    }

    return (
        <NavigationContext.Provider value={{ openDialog, handleOpenDialog, loading, handleLoading }}>
            {children}
        </NavigationContext.Provider>
    )
}

export default NavigationContextProvider;