import { FC, useState } from "react";
import WorkSpaceNameForm from "./WorkSpaceName";
import WorkSpaceColor from "./WorkSpaceColor";
import WorkSpaceDetails from "./WorkSpaceDetails";

const NewWorkSpaceContent: FC<INewWorkSpaceProp> = ({
	type,
	workSpaseKey,
	onClose,
}) => {
	const [modalPage, setModalPage] = useState<TPage>("workspaceName");
	const [workspaceName, setWorkspaceName] = useState<string>("");
	const [workspaceColor, setWorkspaceColor] = useState<TColorSchemes>("gray");
	// const initialColor = "red-primary";

	let page;
	switch (modalPage) {
		case "workspaceName":
			page = (
				<WorkSpaceNameForm
					setModalPage={setModalPage}
					workspaceName={workspaceName}
					setWorkspaceName={setWorkspaceName}
					type={type}
				/>
			);
			break;
		case "workspaceColor":
			page = (
				<WorkSpaceColor
					setModalPage={setModalPage}
					workspaceName={workspaceName}
					workspaceColor={workspaceColor}
					setWorkspaceColor={setWorkspaceColor}
					type={type}
				/>
			);
			break;
		case "workspaceDetails":
			page = (
				<WorkSpaceDetails
					setModalPage={setModalPage}
					workspaceColor={workspaceColor}
					workspaceName={workspaceName}
					workspaceOwner={{ img: "slkdjfoi", name: "sara ahimi" }}
					type={type}
					workSpaseKey={workSpaseKey}
					onClose={onClose}
				/>
			);
			break;
	}

	return <>{page}</>;
};

export default NewWorkSpaceContent;
