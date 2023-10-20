import axios from "axios";
import { RefreshUserToken } from "../RefreshUserToken";

export const AXIOS = axios.create({
	baseURL: "https://quera.iran.liara.run",
});

AXIOS.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response.status === 401) {
			RefreshUserToken();
		}
		return Promise.reject(error);
	}
);

const access = localStorage.getItem("access");
if (access) {
	AXIOS.defaults.headers.common.Authorization = `Bearer ${access}`;
}
