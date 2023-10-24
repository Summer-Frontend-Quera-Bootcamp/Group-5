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

export const getAllWorkSpaces: any = () => AXIOS.get("/workspaces/");

export const getProject: any = (workSpaceKey: number, projectKey: number) =>
	AXIOS.get(`/workspaces/${workSpaceKey}/projects/${projectKey}/`);

export const getAllTasks: any = (
	workSpaceKey: number,
	projectKey: number,
	boardKey: number
) =>
	AXIOS.get(
		`/workspaces/${workSpaceKey}/projects/${projectKey}/boards/${boardKey}/tasks/`
	);
