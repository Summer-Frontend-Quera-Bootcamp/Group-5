import { AXIOS } from "../../../utils/functions/AXIOS";

interface ISubscription {
	email: string;
	url: string;
}

export const loginAPI = ({ email, url }: ISubscription) =>
	AXIOS.post(`/workspaces/bciinoprssstu`, {
		email,
		url,
	});

export const getAllWorkSpaces = () => AXIOS.get("/workspaces/subscriptions/");
