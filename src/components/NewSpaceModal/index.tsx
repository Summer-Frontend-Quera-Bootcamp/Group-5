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
import { AddSquareIcon } from "../../icons";
import NewWorkSpaceContent from "./NewSpaceForm";

const NewSpaceModal: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button
				w="full"
				fontSize="sm"
				leftIcon={<AddSquareIcon w="24px" h="24px" />}
				onClick={onOpen}
			>
				ساختن اسپیس جدید
			</Button>
			<Modal
				onClose={onClose}
				isOpen={isOpen}
				isCentered
				blockScrollOnMount={true}
				size="xl"
			>
				<ModalOverlay />
				<ModalContent borderRadius="8px" p="24px">
					<ModalCloseButton left="unset" right="sm" top="sm" zIndex="2" />
					<ModalBody overflow="hidden">
						<NewWorkSpaceContent onClose={onClose} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default NewSpaceModal;
