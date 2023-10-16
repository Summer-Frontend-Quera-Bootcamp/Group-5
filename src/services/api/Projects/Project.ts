import { AXIOS } from "../../../utils/functions/AXIOS";

interface IProject {
	id: string;
	name: string;
}

export const ProjectAPI = ({ name }: IProject) =>
	AXIOS.post("/workspaces/{workspace_id}/projects/", {
		name,
	});

export const getAllWorkSpaces = () => AXIOS.get("/workspaces/");

export const patchProject = ({
	workspaceId,
	projectId,
	name,
}: {
	workspaceId: string;
	projectId: string;
	name: string;
}) =>
	AXIOS.patch(`/workspaces/${workspaceId}/projects/${projectId}`, {
		name,
	});

export const deleteProject = ({
	workspaceId,
	projectId,
}: {
	workspaceId: string;
	projectId: string;
}) => AXIOS.delete(`/workspaces/${workspaceId}/projects/${projectId}`);
