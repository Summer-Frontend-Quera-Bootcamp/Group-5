import { AXIOS } from "../../utils/functions/AXIOS";

interface ILoginProp {
	username: string;
	password: string;
}

export const loginAPI = ({ username, password }: ILoginProp) =>
	AXIOS.post("/accounts/login/", {
		username,
		password,
	});
