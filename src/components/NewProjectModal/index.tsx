import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Heading,
} from "@chakra-ui/react";
import { Button, NewProjectButton, ValidateInput } from "..";
import { useForm } from "react-hook-form";
import { chakra } from "@chakra-ui/react";

const NewProjectModal: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm();
	return (
		<>
			<NewProjectButton color="blue" onClick={onOpen} />
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
								ساختن پروژه جدید
							</Heading>
							<ValidateInput
								type="text"
								label="نام پروژه"
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

export default NewProjectModal;
