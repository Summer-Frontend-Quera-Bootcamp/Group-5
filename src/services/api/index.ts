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

export const getAllWorkSpaces = () => AXIOS.get("/workspaces/");

export const getAllprojects = (workspaceId: number) =>
	AXIOS.get(`/workspaces/${workspaceId}/projects/`);

export const getProject = (workSpaceKey: number, projectKey: number) =>
	AXIOS.get(`/workspaces/${workSpaceKey}/projects/${projectKey}/`);

export const getAllTasks = (
	workSpaceKey: number,
	projectKey: number,
	boardKey: number
) =>
	AXIOS.get(
		`/workspaces/${workSpaceKey}/projects/${projectKey}/boards/${boardKey}/tasks/`
	);

export const sendInvitation = (email: string, url: string) => {
	AXIOS.post("/workspaces/subscriptions", { email, url });
};
