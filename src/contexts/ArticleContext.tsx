import React, { useEffect } from 'react';
import { useState, createContext } from 'react';
import { errorMessageHadler } from '../utils';
import axios from 'axios';
import { BASE_URL } from '../utils/config';
import { useNavigationContext } from './NavigationContext';

type ArticleContextValue = {
    articles: any[];
}
type ArticleContextProviderProps = {
    children: React.ReactNode;
}

export const ArticleContext = createContext<ArticleContextValue | null>(null);

export default function ArticleContextProvider({ children }: ArticleContextProviderProps) {
    const [articles, setArticles] = useState([]);
    // @ts-ignore
    const { setLoading } = useNavigationContext();

    const allPostedArticles = async () => {
        try {
            setLoading(true);
            const res = await axios.get(BASE_URL + '/article/published/all');
            if (res.status == 200) {
                setArticles(res.data.data);
                setLoading(true);
            }
        } catch (error) {
            setLoading(false);
            errorMessageHadler(error)
        }
    }

    useEffect(() => {
        allPostedArticles()
    }, [])

    return (
        <ArticleContext.Provider value={{ articles }}>
            {children}
        </ArticleContext.Provider>
    )
}


export function useArticleContext() {
    const context = React.useContext(ArticleContext);

    if (context === undefined) {
        throw new Error("useUserNavigation must be used within a UserContextProvider")
    }
    return context;
}

