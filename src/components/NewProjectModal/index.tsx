import { useDisclosure } from "@chakra-ui/react";
import { NewProjectButton } from "..";
import ModalItem from "./modalItem";

interface INewProjectModalProps {
	color: string;
}

const NewProjectModal: React.FC<INewProjectModalProps> = ({ color }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<NewProjectButton color={color} onClick={onOpen} />
			<ModalItem isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default NewProjectModal;
