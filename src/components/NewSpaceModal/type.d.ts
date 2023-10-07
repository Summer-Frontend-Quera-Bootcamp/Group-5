type TPage = "workspaceName" | "workspaceColor" | "workspaceDetails";

interface IWorkSpaceNameProps {
	workspaceName: string;
	setWorkspaceName: Dispatch<SetStateAction<string>>;
	setModalPage: Dispatch<SetStateAction<TPage>>;
}

interface IWorkSpaceColorProps {
	workspaceName: string;
	workspaceColor: TColorSchemes;
	setWorkspaceColor: Dispatch<SetStateAction<TColorSchemes>>;
	setModalPage: Dispatch<SetStateAction<TPage>>;
}

interface IWorkSpaceDetailsProps {
	workspaceName: string;
	workspaceColor: TColorSchemes;
	workspaceOwner: { img: string; name: string };
	setModalPage: Dispatch<SetStateAction<TPage>>;
}
