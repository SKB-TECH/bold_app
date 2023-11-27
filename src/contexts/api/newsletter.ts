import axios from "axios";
import { BASE_URL } from "../../utils/config";


export const subscribe = (data: any) => axios.post(BASE_URL + '/newsletter/subscribe', data);
export const unsubscribe = (data: any) => axios.post(BASE_URL + '/newsletter/unsubscribe', data);