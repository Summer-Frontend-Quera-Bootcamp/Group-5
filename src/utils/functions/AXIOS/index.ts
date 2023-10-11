import axios from "axios";

export const AXIOS = axios.create({
	baseURL: "https://quera.iran.liara.run",
});

AXIOS.interceptors.request.use(async (config) => {
	const accessToken = localStorage.getItem("token");
	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}
	return config;
});
