import { createContext } from 'react';
import toast from 'react-hot-toast';
import { errorMessageHadler, toastOption } from '../utils';
import { subscribe, unsubscribe } from './api/newsletter';

// interface NewslettersContextValue {
//     subscribeAction: (data: any) => void;
//     unsubscribeAction: (data: any) => void;
// }
// interface NewsLetterContextProps {
//     children: React.ReactNode;
// }
interface newLettersData {
    mail: string;
    name: string;
}

// @ts-ignore
export const NewsletterContext = createContext();

// @ts-ignore
const NewsletterContextProvider = ({ children }) => {
    const subscribeAction = async (data: newLettersData) => {
        try {
            console.log("first")
            await toast.promise(subscribe(data), toastOption);
        } catch (e) {
            errorMessageHadler(e)
        }
    }

    const unsubscribeAction = async (data: newLettersData) => {
        try {
            await toast.promise(unsubscribe(data), toastOption);

        } catch (e) {
            errorMessageHadler(e)
        }
    }

    return (
        <NewsletterContext.Provider value={{ subscribeAction, unsubscribeAction }}>
            {children}
        </NewsletterContext.Provider>
    );
}

export default NewsletterContextProvider;