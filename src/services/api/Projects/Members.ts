import { AXIOS } from "../../../utils/functions/AXIOS";

interface IMembers {
	id: number;
	user: {
		id: number;
		username: string;
		first_name: string;
		last_name: string;
		phone_number: number;
		email: string;
		thumbnail: string;
	};
}
export const memberAPI = ({
	user: { username, email, first_name, last_name, phone_number, thumbnail },
}: IMembers) =>
	AXIOS.post(`/workspaces/{workspace_id}/projects/{project_id}/members/`, {
		user: {
			username,
			email,
			first_name,
			last_name,
			phone_number,
			thumbnail,
		},
	});

export const getAllWorkSpaces = () =>
	AXIOS.get(`/workspaces/{workspace_id}/projects/{project_id}/members/{id}/`);

export const deleteMembers = (
	id: string,
	workspace_id: string,
	project_id: string
) =>
	AXIOS.delete(
		`/workspaces/${workspace_id}/projects/${project_id}/members/${id}/`
	);
