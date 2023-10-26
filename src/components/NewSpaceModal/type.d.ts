type TPage = "workspaceName" | "workspaceColor" | "workspaceDetails";
type TType = "add" | "edit";
interface IWorkSpaceNameProps {
	workspaceName: string;
	setWorkspaceName: Dispatch<SetStateAction<string>>;
	setModalPage: Dispatch<SetStateAction<TPage>>;
	type?: TType;
	workSpaseKey?: any;
}

interface IWorkSpaceColorProps {
	workspaceName: string;
	workspaceColor: TColorSchemes;
	setWorkspaceColor: Dispatch<SetStateAction<TColorSchemes>>;
	setModalPage: Dispatch<SetStateAction<TPage>>;
	type?: TType;
	workSpaseKey?: any;
}

interface IWorkSpaceDetailsProps {
	workspaceName: string;
	workspaceColor: TColorSchemes;
	workspaceOwner: { img: string; name: string };
	setModalPage: Dispatch<SetStateAction<TPage>>;
	type?: TType;
	workSpaseKey?: any;
	onClose: () => void;
}
interface INewWorkSpaceProp {
	type?: TType;
	workSpaseKey?: any;
	onClose: () => void;
}
