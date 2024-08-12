import axiosInstance from "./index";

export const fetchData = (url: string) => axiosInstance.get(url);
export const postData = (url: string, data: any) => axiosInstance.post(url, data);