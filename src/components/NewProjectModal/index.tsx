import { useDisclosure } from "@chakra-ui/react";
import { NewProjectButton } from "..";
import ModalItem from "./modalItem";

interface INewProjectModalProps {
	color: string;
	workspaceId: number;
}

const NewProjectModal: React.FC<INewProjectModalProps> = ({
	color,
	workspaceId,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<NewProjectButton color={color} onClick={onOpen} />
			<ModalItem isOpen={isOpen} onClose={onClose} workSpacekey={workspaceId} />
		</>
	);
};

export default NewProjectModal;
