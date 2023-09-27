interface IProjectProps {
	projectId: string;
	projectTitle: string;
	color: string;
	children: string;
}

interface IProject {
	projectId: string;
	title: string;
}

interface IProjectRowProps {
	projects: IProject[];
	color: string;
}
