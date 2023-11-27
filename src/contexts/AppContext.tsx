import React, { createContext } from 'react';
import NavigationContextProvider from './NavigationContext';

interface AppContextValue {
    currentPath: string;
    setCurrentPath: (path: string) => void
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

function AppContexProvider({ children }: any) {
    const [currentPath, setCurrentPath] = React.useState("");
    return (
        <NavigationContextProvider ntextProvider>
            <AppContext.Provider value={{ currentPath, setCurrentPath }}>
                {children}
            </AppContext.Provider>
        </NavigationContextProvider>
    )
}

export default AppContexProvider;