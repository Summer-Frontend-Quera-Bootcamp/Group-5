import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Heading,
	Text,
	Box,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { chakra } from "@chakra-ui/react";
import { Button, Column, ValidateInput } from "../..";
import { SmallAddIcon } from "@chakra-ui/icons";
import { useState } from "react";

const NewBoardModal = (): JSX.Element => {
	const [flag, setFlag] = useState<boolean>(false);
	const [array, setArray] = useState<JSX.Element[]>([]);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm();
	const submit = (data: any) => {
		setFlag(true);
		setArray((old) => [
			...old,
			<Column text={data.taskBoardName} color={data.taskBoardColor} />,
		]);
	};
	return (
		<>
			<Box display="Flex" flexDir="row" gap="20px">
				{flag && array.map((x) => x)}
				<Text
					as="button"
					onClick={onOpen}
					align="right"
					color="gray.400"
					fontWeight="500"
					w="250px"
					h="44px"
					borderRadius="16px"
					p="8px 12px"
					bg="#FFFFFF"
					boxShadow="lg"
				>
					<SmallAddIcon m="1px" />
					ساختن برد جدید
				</Text>
			</Box>
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
							onSubmit={handleSubmit(submit)}
						>
							<Heading textAlign="center" fontWeight="800" fontSize="24px">
								ساختن برد جدید
							</Heading>
							<ValidateInput
								type="text"
								label="نام برد"
								register={register}
								errors={errors}
								name="taskBoardName"
							/>
							<ValidateInput
								type="text"
								label="رنگ دلخواه را وارد کنید"
								register={register}
								errors={errors}
								name="taskBoardColor"
							/>
							<Box as="button" onClick={onClose}>
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

export default NewBoardModal;
