import {
	Button,
	MenuItem,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";
import { useAppSelector } from "../../hooks";
import { AddIcon, AddSquareIcon } from "../../icons";
import NewTaskForm from "./NewTaskForm";

const NewTaskModal: FC<{
	place: "board" | "projectPage" | "columnDots";
	project: string;
	boardId?: number;
	handleChange?: Dispatch<SetStateAction<any[]>>;
}> = ({ place, project, boardId, handleChange }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { accent } = useAppSelector((state) => state.theme);

	const getBtn = (place: "board" | "projectPage" | "columnDots") => {
		switch (place) {
			case "board":
				return (
					<Button
						variant="unstyled"
						colorScheme={accent}
						onClick={onOpen}
						w="24px"
						h="24px"
					>
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
			case "columnDots":
				return (
					<MenuItem
						icon={<AddIcon w="25px" h="25px" mr="-5px" />}
						onClick={onOpen}
					>
						افزودن تسک
					</MenuItem>
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
						<NewTaskForm
							project={project}
							boardId={boardId!}
							handleChange={handleChange}
							onClose={onClose}
						/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default NewTaskModal;
