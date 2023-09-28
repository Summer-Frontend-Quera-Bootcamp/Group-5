import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Heading,
	Button as ChakraButton,
} from "@chakra-ui/react";
import { Button, ValidateInput } from "..";
import { useForm } from "react-hook-form";
import { chakra } from "@chakra-ui/react";
import { AddSquareIcon } from "../../icons";

const NewSpaceModal: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm();
	return (
		<>
			<ChakraButton
        w="full"
        fontSize="sm"
				leftIcon={<AddSquareIcon w="24px" h="24px" />}
				onClick={onOpen}
			>
				ساختن اسپیس جدید
			</ChakraButton>
			<Modal
				onClose={onClose}
				isOpen={isOpen}
				isCentered
				blockScrollOnMount={true}
				size="xl"
			>
				<ModalOverlay />
				<ModalContent borderRadius="8px" p="24px">
					<ModalCloseButton left="unset" right="sm" top="sm" />
					<ModalBody>
						<chakra.form display="flex" flexDir="column" gap="xl">
							<Heading textAlign="center" fontWeight="800" fontSize="24px">
								ساختن ورک‌اسپیس جدید
							</Heading>
							<ValidateInput
								type="text"
								label="نام ورک‌اسپیس"
								register={register}
								errors={errors}
							/>
							<Button isActive={true} type="submit" fullWidth={true}>
								ادامه
							</Button>
						</chakra.form>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default NewSpaceModal;
