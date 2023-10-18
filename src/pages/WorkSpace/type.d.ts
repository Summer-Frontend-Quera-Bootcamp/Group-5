interface IProjectProps {
	workspaceId: number;
	projectId: number;
	projectTitle: string;
	color: string;
	children: string;
}

interface IProject {
	id: number;
	name: string;
}

interface IWorkspace {
	id: number;
	name: string;
	color: string;
}

interface IProjectRowProps {
	workspaceId: number;
	color: string;
}
