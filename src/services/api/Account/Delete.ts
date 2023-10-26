import { AXIOS } from "../../../utils/functions/AXIOS";

export const deleteAccount = async (
	req: { params: { id: any } },
	res: {
		status: (arg0: number) => {
			(): any;
			new (): any;
			json: { (arg0: { message?: string; error?: string }): void; new (): any };
		};
	}
) => {
	const accountId = req.params.id;

	try {
		// Make a DELETE request to the API endpoint using Axios
		const response = await AXIOS.delete(`/accounts/${accountId}`);

		// Check the response status code
		if (response.status === 200) {
			res.status(200).json({ message: "Account deleted successfully" });
		} else {
			res.status(response.status).json({ error: "Failed to delete account" });
		}
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};
