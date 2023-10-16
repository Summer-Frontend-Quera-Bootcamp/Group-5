import { AXIOS } from "../../../utils/functions/AXIOS";

interface IUpdate {
	username: string;
	email: string;
	first_name: string;
	last_name: string;
	phone_number: number;
	thumbnail: string;
}

export const updateAccount = async (id: string, updateData: IUpdate) => {
	try {
		const response = await AXIOS.patch(`/accounts/${id}`, updateData);
		console.log("Account updated successfully:", response.data);
		// Handle the response or perform any additional actions
	} catch (error) {
		console.error("Error updating account:", error);
		// Handle the error
	}
};
