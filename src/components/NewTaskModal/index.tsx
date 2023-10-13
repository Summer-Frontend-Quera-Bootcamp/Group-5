import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";
import { useAppSelector } from "../../hooks";
import { AddIcon, AddSquareIcon } from "../../icons";
import NewTaskForm from "./NewTaskForm";

const NewTaskModal: FC<{ place: "board" | "projectPage"; project: string }> = ({
	place,
	project,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { accent } = useAppSelector((state) => state.theme);

	const getBtn = (place: "board" | "projectPage") => {
		switch (place) {
			case "board":
				return (
					<Button variant="unstyled" colorScheme={accent} onClick={onOpen}>
						<AddIcon w="24px" h="24px" />
					</Button>
				);
			case "projectPage":
				return (
					<Button
						pos="fixed"
						bottom="30px"
						left="40px"
						zIndex="100"
						colorScheme={accent}
						leftIcon={<AddSquareIcon w="24px" h="24px" />}
						onClick={onOpen}
					>
						تسک جدید
					</Button>
				);
		}
	};

	return (
		<>
			{getBtn(place)}
			<Modal
				onClose={onClose}
				isOpen={isOpen}
				isCentered
				blockScrollOnMount={true}
				size="5xl"
			>
				<ModalOverlay />
				<ModalContent borderRadius="8px" p="24px">
					<ModalCloseButton left="sm" top="sm" />
					<ModalBody p="0">
						<NewTaskForm project={project} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default NewTaskModal;
