import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction, useCallback } from "react";
import { Calendar } from "../../..";
import { taskDetailButtonStyle } from "../style";
import { CalendarIcon } from "../../../../icons";

interface ICustomDateInputProps {
	handleClick: Dispatch<SetStateAction<string>>;
}

const CustomDateInput: FC<ICustomDateInputProps> = ({ handleClick }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button sx={taskDetailButtonStyle} onClick={onOpen}>
				<CalendarIcon w="30px" h="30px" />
			</Button>
			<Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalBody>
						<Calendar
							workspaceId={12}
							projectId={13}
							type="modal"
							handleDateClick={handleClick}
							onParentClose={onClose}
						/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default CustomDateInput;
