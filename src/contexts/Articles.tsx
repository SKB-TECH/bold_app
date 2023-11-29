import React, { useEffect } from 'react';
import { useState, createContext } from 'react';
import toast from 'react-hot-toast';
import { errorMessageHadler } from '../utils';
import axios from 'axios';
import { BASE_URL } from '../utils/config';

type ArticleContextValue = {
    articles: any[];
}
type ArticleContextProviderProps = {
    children: React.ReactNode;
}

export const ArticleContext = createContext<ArticleContextValue | null>(null);

export default function UserContextPRovider({ children }: ArticleContextProviderProps) {
    const [articles, setArticles] = useState([]);

    const allPostedArticles = async () => {
        try {
            const res = await axios.get(BASE_URL + '/article/all');
            if (res.status == 200) {
                setArticles(res.data.data);
            }
        } catch (error) {
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

