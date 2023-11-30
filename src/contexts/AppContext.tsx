import React, { createContext } from 'react';
import NavigationContextProvider from './NavigationContext';
import NewsletterContextProvider from './NewlettersContext';
import UserContextPRovider from './UserContext';
import ArticleContextProvider from './ArticleContext';

interface AppContextValue {
    currentPath: string;
    setCurrentPath: (path: string) => void
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

function AppContexProvider({ children }: any) {
    const [currentPath, setCurrentPath] = React.useState("");
    return (
        // @ts-ignore
        <NavigationContextProvider>
            <UserContextPRovider>
                <NewsletterContextProvider>
                    <ArticleContextProvider>
                        <AppContext.Provider value={{ currentPath, setCurrentPath }}>
                            {children}
                        </AppContext.Provider>
                    </ArticleContextProvider>
                </NewsletterContextProvider>
            </UserContextPRovider>
        </NavigationContextProvider>
    )
}

export default AppContexProvider;