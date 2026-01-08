import axios from "axios";
import config from "../config";
import { LiturgyResponse } from "../types/liturgy";

const API_BASE_URL = config.api.uri;

export async function getTodaysLiturgy(): Promise<LiturgyResponse> {
    const today = new Date();
    const day = today.getDate().toString();
    const month = (today.getMonth() + 1).toString();
    const response = await axios.get<LiturgyResponse>(`${API_BASE_URL}/${day}-${month}`);

    return response.data;
}

export async function getLiturgyByDate(day: string, month: string): Promise<LiturgyResponse> {
    const response = await axios.get<LiturgyResponse>(`${API_BASE_URL}/${day}-${month}`);
    return response.data;
}