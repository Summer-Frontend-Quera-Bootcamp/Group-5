import { FC, useState } from "react";
import WorkSpaceNameForm from "./WorkSpaceName";
import WorkSpaceColor from "./WorkSpaceColor";
import WorkSpaceDetails from "./WorkSpaceDetails";

const NewWorkSpaceContent: FC = () => {
	const [modalPage, setModalPage] = useState<TPage>("workspaceName");
	const [workspaceName, setWorkspaceName] = useState<string>("");
	const [workspaceColor, setWorkspaceColor] = useState<TColors>("gray-primary");
	// const initialColor = "red-primary";

	let page;
	switch (modalPage) {
		case "workspaceName":
			page = (
				<WorkSpaceNameForm
					setModalPage={setModalPage}
					workspaceName={workspaceName}
					setWorkspaceName={setWorkspaceName}
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
				/>
			);
			break;
	}

	return <>{page}</>;
};

export default NewWorkSpaceContent;