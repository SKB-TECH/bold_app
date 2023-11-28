import React, { createContext } from 'react';
import NavigationContextProvider from './NavigationContext';
import NewsletterContextProvider from './NewlettersContext';

interface AppContextValue {
    currentPath: string;
    setCurrentPath: (path: string) => void
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

function AppContexProvider({ children }: any) {
    const [currentPath, setCurrentPath] = React.useState("");
    return (
        <NavigationContextProvider>
            <NewsletterContextProvider>
                <AppContext.Provider value={{ currentPath, setCurrentPath }}>
                    {children}
                </AppContext.Provider>
            </NewsletterContextProvider>
        </NavigationContextProvider>
    )
}

export default AppContexProvider;