import { AXIOS } from "../../../utils/functions/AXIOS";

interface ILogo {
	id: number;
	task: number;
	old_priority: number;
	new_priority: number;
}

export const getAllWorkSpaces = () =>
	AXIOS.get(
		`/workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks/{task_id}/assignee/`
	);
