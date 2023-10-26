import { AXIOS } from "../../../utils/functions/AXIOS";

interface ITasks {
	id: 0;
	name: string;
	description: string;
	deadline: Date;
	priority: number;
	attachment: string;
	thumbnail: string;
	order: number;
	members: string;
}
export const tasksAPI = ({
	name,
	description,
	priority,
	attachment,
	thumbnail,
	order,
}: ITasks) =>
	AXIOS.post(
		"/workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks//",
		{
			name,
			description,
			priority,
			attachment,
			thumbnail,
			order,
		}
	);

export const TasksAPI = ({
	name,
	description,
	priority,
	attachment,
	thumbnail,
	order,
}: ITasks) =>
	AXIOS.patch(
		`/workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks/`,
		{
			name,
			description,
			priority,
			attachment,
			thumbnail,
			order,
		}
	);

export const getAllWorkSpaces = () =>
	AXIOS.get(
		`/workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks/`
	);

export const deleteTasks = (taskId: number) =>
	AXIOS.delete(
		`/workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks/`
	);
