import axios from "axios";

export const API = axios.create({baseURL: process.env.NEXT_APP_BASE_URL})