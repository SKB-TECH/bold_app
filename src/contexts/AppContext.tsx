import React, { createContext, useState } from 'react';
import NavigationContextProvider from './NavigationContext';
import NewsletterContextProvider from './NewlettersContext';
import UserContextPRovider from './UserContext';
import ArticleContextProvider from './ArticleContext';
import { IntlProvider, RawIntlProvider, createIntl, createIntlCache } from 'react-intl'
import siteMessageFr from "../data/locales/fr.json"
import siteMessageEn from "../data/locales/en.json"
import DonContextProvider from './DonContext';


interface AppContextValue {
    currentPath: string;
    locale: string;
    setCurrentPath: (path: string) => void
    switchLanguage: (lang: string) => void
}

const allMessage = {
    fr: { ...siteMessageFr },
    en: { ...siteMessageEn }
}
const AppContext = createContext<AppContextValue | undefined>(undefined);

function AppContexProvider({ children }: any) {
    const [currentPath, setCurrentPath] = React.useState("");
    // ** States
    const [locale, setLocale] = useState('fr')
    const [messages, setMessages] = useState(allMessage['fr'])

    const cache = createIntlCache()
    const intl = createIntl(
        {
            locale,
            messages,
        },
        cache
    );
    //     // ** Switches Language
    const switchLanguage = (lang: any) => {
        setLocale(lang)
        // @ts-ignore
            return (
                <NavigationContextProvider>
                <UserContextPRovider>
                 <DonContextProvider>
                    <NewsletterContextProvider>
                    <ArticleContextProvider>
                        <AppContext.Provider value={{ currentPath, setCurrentPath }}>
                            {children}
                        </AppContext.Provider>
                    </ArticleContextProvider>
                    </NewsletterContextProvider>
                    </DonContextProvider>
                </UserContextPRovider>      
            </NavigationContextProvider>
            )
       
}
}
export default AppContexProvider;

export function useAppContext() {
    const context = React.useContext(AppContext);

    if (context === undefined) {
        throw new Error("useAppContext must be used within a AppContextProvider")
    }
    return context;
}