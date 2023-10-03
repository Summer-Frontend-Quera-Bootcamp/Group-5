type TPage = "workspaceName" | "workspaceColor" | "workspaceDetails";

interface IWorkSpaceNameProps {
	workspaceName: string;
	setWorkspaceName: Dispatch<SetStateAction<string>>;
	setModalPage: Dispatch<SetStateAction<TPage>>;
}

interface IWorkSpaceColorProps {
	workspaceName: string;
	workspaceColor: TColors;
	setWorkspaceColor: Dispatch<SetStateAction<TColors>>;
	setModalPage: Dispatch<SetStateAction<TPage>>;
}

interface IWorkSpaceDetailsProps {
	workspaceName: string;
	workspaceColor: TColors;
	workspaceOwner: { img: string; name: string };
	setModalPage: Dispatch<SetStateAction<TPage>>;
}
