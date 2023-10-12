import { SmallAddIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	HStack,
	Heading,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	RadioGroup,
	Text,
	chakra,
	useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Column, ValidateInput } from "../..";
import { useAppSelector } from "../../../hooks";
import ColorInput from "../../ColorInput";

const NewBoardModal = (): JSX.Element => {
	const [flag, setFlag] = useState<boolean>(false);
	const [array, setArray] = useState<JSX.Element[]>([]);
	const [boardColor, setBoardColor] = useState<TColorSchemes>("red");
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { accent } = useAppSelector((state) => state.theme);
	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm();
	const submit = (data: any) => {
		setFlag(true);
		console.log(boardColor);
		console.log(data);
		setArray((old) => [
			...old,
			<Column text={data.taskBoardName} color={boardColor} />,
		]);
	};
	const colors: TColorSchemes[] = [
		"red",
		"orange",
		"yellow",
		"green",
		"teal",
		"blue",
		"cyan",
		"purple",
		"pink",
	];
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
							<FormControl as="fieldset" display="flex" gap="sm">
								<FormLabel as="legend" fontSize="md">
									رنگ دلخواه را وارد کنید
								</FormLabel>
								<RadioGroup>
									<HStack wrap="wrap" columnGap="sm" rowGap="0">
										{colors.map((c) => (
											<ColorInput
												key={c}
												color={c}
												selectedColor={boardColor}
												setSelectedColor={setBoardColor}
											/>
										))}
									</HStack>
								</RadioGroup>
							</FormControl>
							<Box as="button" onClick={onClose}>
								<Button w="full" colorScheme={accent} type="submit">
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
