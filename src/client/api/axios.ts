import { API_BASE_URL } from '@/constants/api';
import axios from 'axios';

export const quoteApi = axios.create({
	baseURL: API_BASE_URL,
});
