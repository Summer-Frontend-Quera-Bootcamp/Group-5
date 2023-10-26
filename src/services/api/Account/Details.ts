import { AXIOS } from "../../../utils/functions/AXIOS";

interface IDetail {
	id: number;
	username: string;
	email: string;
	first_name: string;
	last_name: string;
	phone_number: number;
	thumbnail: string;
}

export const getAllWorkSpaces = () => AXIOS.get("/workspaces/");
