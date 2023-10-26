import { AXIOS } from "../../../utils/functions/AXIOS";

interface IPasswordReset {
	email: String;
}

export const RestPassword = ({ email }: IPasswordReset) =>
	AXIOS.post("/accounts/reset-password/", {
		email,
	});

export const getAllWorkSpaces = () => AXIOS.get("/workspaces/");
