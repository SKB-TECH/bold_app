export const saveToken = (userData: any) => {
    if (!localStorage.getItem('user')) {
        localStorage.setItem('user', JSON.stringify(userData));
    }
};

export const getToken = () => {
    if (!localStorage.getItem('user')) {
        return false;
    }
    const tokenString = localStorage.getItem("user") || "";
    const userData = JSON.parse(tokenString);
    return userData
};

export const saveToLocalStorage = (data: any, name: string) => {
    localStorage.removeItem(name);
    if (!localStorage.getItem(name)) {
        localStorage.setItem(name, JSON.stringify(data));
    }
};

export const getLocalStorageItem = (name: string) => {
    if (!localStorage.getItem(name)) {
        return null;
    }
    const tokenString = localStorage.getItem(name) || "";
    const data = JSON.parse(tokenString);
    return data
};


export const removeLocalStorageItem = (name: string) => {
    return localStorage.removeItem(name)
};

export const toastOption = {
    loading: 'Traitement en cours',
    success: 'Traitement reussi',
    error: 'Erreur lors du traitement',
}

export const errorMessageHadler = (error: any) => {
    const message = (error.response && error.response.data && error.response.data.message) ||
        error.message.toString() ||
        error.toString();
    return message
}
