import { AXIOS } from "../../../utils/functions/AXIOS";

interface IRegister {
	email: String;
}

export const RestPassword = ({ email }: IRegister) =>
	AXIOS.post("/accounts/", {
		email,
	});
