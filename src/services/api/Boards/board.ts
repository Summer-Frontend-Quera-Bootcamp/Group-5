import { AXIOS } from "../../../utils/functions/AXIOS";

interface IBoard {
	id: number;
	name: string;
	order: number;
	tasks: string;
	tasks_count: string;
	is_archive: boolean;
}

export const BoardAPI = ({ id, name, order, is_archive }: IBoard) =>
	AXIOS.patch(`/workspaces/{workspace_id}/projects/{project_id}/boards/${id}`, {
		name,
		order,
		is_archive,
	});

export const getAllWorkSpaces = () => AXIOS.get("/workspaces/");

export const deleteBoard = (boardId: number) =>
	AXIOS.delete(
		`/workspaces/{workspace_id}/projects/{project_id}/boards/${boardId}`
	);
