interface IProjectProps {
	projectId: string;
	projectTitle: string;
	color: string;
	children: string;
}

interface IProject {
	projectId: string;
	title: string;
	color: string;
}

interface IProjectRowProps {
	projects: IProject[];
}
