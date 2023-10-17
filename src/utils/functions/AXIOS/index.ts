import axios from "axios";
import { RefreshUserToken } from "../RefreshUserToken";

export const AXIOS = axios.create({
	baseURL: "https://quera.iran.liara.run",
});

AXIOS.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response === 401) {
			RefreshUserToken();
		}
		return Promise.reject(error);
	}
);

const access = localStorage.getItem("access");
if (access) {
	AXIOS.defaults.headers.common.Authorization = `Bearer ${access}`;
}
