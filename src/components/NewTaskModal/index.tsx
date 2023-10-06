import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	ModalHeader,
} from "@chakra-ui/react";
import { AddIcon, AddSquareIcon } from "../../icons";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

const NewTaskModal: FC<{ place: "board" | "projectPage" }> = ({ place }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { accent } = useSelector((state: RootState) => state.theme);
	const dispatch = useDispatch();

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
					<ModalHeader></ModalHeader>
					<ModalCloseButton left="sm" top="sm" />
					<ModalBody></ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default NewTaskModal;
