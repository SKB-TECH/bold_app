import axios from "axios";
import { BASE_URL } from "../../utils/config";
import { errorMessageHadler, toastOption } from "../../utils";
import toast from "react-hot-toast";


export const subscribe = async (data: any) => {
    try {
        const res = await toast.promise(axios.post(BASE_URL + '/newsletter/subscribe', data), toastOption)
        return res
    } catch (error) {
        errorMessageHadler(error)
    }
};

export const unsubscribe = async (data: any) => await toast.promise(axios.post(BASE_URL + '/newsletter/unsubscribe', data,
    { headers: { "Content-Type": "application/json" } }), toastOption);

export const soutien = async (data: any) => {
    try {
        const res = await toast.promise(axios.post(BASE_URL + '/don/', data), toastOption)
        return res
    } catch (error) {
        errorMessageHadler(error)
    }
};
