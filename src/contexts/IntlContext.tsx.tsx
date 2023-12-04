// import React, { createContext, useContext, ReactNode } from 'react';
// import { IntlProvider, createIntl, createIntlCache } from 'react-intl';

// interface IntlContextProps {
//     locale: string;
//     messages: Record<string, string>;
// }

// const IntlContext = createContext<IntlContextProps | undefined>(undefined);

// export const IntlProviderWrapper: React.FC<{ locale: string; messages: Record<string, string>; children: ReactNode }> = ({
//     locale,
//     messages,
//     children,
// }) => {
//     const cache = createIntlCache();

//     const intl = createIntl(
//         {
//             locale,
//             messages,
//         },
//         cache
//     );const intl = createIntl(
//         {
//             locale,
//             messages,
//         },
//         cache
//     );

//     return <IntlProvider messages={messages} locale={locale} children={children} />
// }

// export const useIntl = () => {
//     const context = useContext(IntlContext);
//     if (!context) {
//         throw new Error('useIntl must be used within an IntlProvider');
//     }
//     return context;
// };