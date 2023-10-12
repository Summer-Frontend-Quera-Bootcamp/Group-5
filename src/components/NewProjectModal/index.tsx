import { useDisclosure } from "@chakra-ui/react";
import { NewProjectButton } from "..";
import ModalItem from "./modalItem";

const NewProjectModal: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<NewProjectButton color="blue" onClick={onOpen} />
			<ModalItem isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default NewProjectModal;
