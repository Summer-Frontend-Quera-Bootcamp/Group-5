import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	Heading,
	Box,
} from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { chakra } from "@chakra-ui/react";
import { ValidateInput, Button } from "../..";
import { AXIOS } from "../../../utils/functions/AXIOS";

const ModalItem: React.FC<any> = ({ isOpen, onClose, modalItemKey }) => {
	const {
		handleSubmit,
		watch,
		formState: { errors },
		register,
	} = useForm();
	const watchField = watch();

	const onsubmit: SubmitHandler<FieldValues> = (data) => {
		AXIOS.post(`/workspaces/${modalItemKey}/projects/`, {
			name: data.newProject,
		});
	};

	return (
		<>
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
						<chakra.form
							display="flex"
							flexDir="column"
							gap="xl"
							onSubmit={handleSubmit(onsubmit)}
						>
							<Heading textAlign="center" fontWeight="800" fontSize="24px">
								ساختن پروژه جدید
							</Heading>
							<ValidateInput
								type="text"
								label="نام پروژه"
								register={register}
								errors={errors}
								name="newProject"
							/>
							<Box
								as="button"
								onClick={onClose}
								disabled={!watchField.newProject}
							>
								<Button isActive={true} type="submit" fullWidth={true}>
									ثبت
								</Button>
							</Box>
						</chakra.form>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalItem;
