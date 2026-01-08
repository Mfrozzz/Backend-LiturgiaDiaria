import axios from "axios";
import config from "../config";
import { LiturgyResponse } from "../types/liturgy";

const API_BASE_URL = config.api.uri;

export async function getTodaysLiturgy(): Promise<LiturgyResponse> {
    const today = new Date();
    const response = await axios.get<LiturgyResponse>(`${API_BASE_URL}/${today.getDate().toString()}-${(today.getMonth() + 1).toString()}`);
    return response.data;
}

export async function getLiturgyByDate(day: string, month: string): Promise<LiturgyResponse> {
    const response = await axios.get<LiturgyResponse>(`${API_BASE_URL}/${day}-${month}`);
    return response.data;
}