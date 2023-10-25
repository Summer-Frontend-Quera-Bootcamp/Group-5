import { AXIOS } from "../../../utils/functions/AXIOS";

export const sendInvitation = (email: string, link: string) => {
	const data = {
		email: email,
		url: link,
	};
	AXIOS.post(`/workspaces/subscriptions`, data).then((res) =>
		alert(res.data.detail)
	);
};

