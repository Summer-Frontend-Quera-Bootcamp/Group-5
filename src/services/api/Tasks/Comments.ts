import { AXIOS } from "../../../utils/functions/AXIOS";

interface IComment {
	id: number;
	author: number;
	attachment: string;
	text: string;
}

export const commentAPI = ({ author, attachment, text }: IComment) =>
	AXIOS.post(
		`/workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks/{task_id}/comments/`,
		{
			author,
			attachment,
			text,
		}
	);

export const getAllWorkSpaces = () =>
	AXIOS.get(
		`/workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks/{task_id}/comments/`
	);

export const deletecomment = (
	board_id: string,
	workspace_id: string,
	project_id: string,
	task_id: string
) =>
	AXIOS.delete(
		`/workspaces/${workspace_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/assignee/`
	);
