import { FC, useState } from "react";
import WorkSpaceNameForm from "./WorkSpaceName";
import WorkSpaceColor from "./WorkSpaceColor";
import WorkSpaceDetails from "./WorkSpaceDetails";
import { useAppSelector } from "../../../hooks";

const NewWorkSpaceContent: FC<INewWorkSpaceProp> = ({
	type,
	workSpaseKey,
	onClose,
}) => {
	const [modalPage, setModalPage] = useState<TPage>("workspaceName");
	const [workspaceName, setWorkspaceName] = useState<string>("");
	const [workspaceColor, setWorkspaceColor] = useState<TColorSchemes>("gray");
	const { username, thumbnail } = useAppSelector((state) => state.user);
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
					workspaceOwner={{ img: thumbnail, name: username }}
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
