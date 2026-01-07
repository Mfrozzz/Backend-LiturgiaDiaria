import axios from "axios";
import config from "../config";

const API_BASE_URL = config.api.uri;

export async function getTodaysLiturgy() {
    const today = new Date();
    const response = await axios.get(`${API_BASE_URL}/${today.getDate().toString()}-${(today.getMonth()+1).toString()}`);
    return response.data;
}

export async function getLiturgyByDate(day:string, month:string) {
    const response = await axios.get(`${API_BASE_URL}/${day}-${month}`);
    return response.data;
}