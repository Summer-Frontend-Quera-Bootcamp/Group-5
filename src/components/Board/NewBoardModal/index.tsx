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
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Column, ValidateInput } from "../..";
import { useAppSelector } from "../../../hooks";
import ColorInput from "../../ColorInput";
import { AXIOS } from "../../../utils/functions/AXIOS";
import { useParams } from "react-router-dom";

const NewBoardModal = (): JSX.Element => {
	const [array, setArray] = useState<any[]>([]);
	const [boardColor, setBoardColor] = useState<TColorSchemes>("red");
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { accent } = useAppSelector((state) => state.theme);
	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm();

	const { workspaceId, projectId } = useParams();
	useEffect(() => {
		AXIOS.get(`/workspaces/${workspaceId}/projects/${projectId}/boards/`).then(
			(res) => setArray(res.data)
		);
	}, []);

	const submit = (data: any) => {
		const postData = {
			name: data.taskBoardName,
			order: 5,
			is_archive: true,
			color: boardColor,
		};

		AXIOS.post(
			`/workspaces/${workspaceId}/projects/${projectId}/boards/`,
			postData
		).then((res) => {
			setArray((prev) => {
				const copy = structuredClone(prev);
				copy.push(res.data);
				return copy;
			});
		});
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
				{array?.map((x: any) => (
					<Column
						color={x.color}
						text={x.name}
						key={x.id}
						boardId={x.id}
						onDelete={setArray}
					/>
				))}
				<Text
					as="button"
					onClick={onOpen}
					align="right"
					color="gray.400"
					fontWeight={500}
					w="250px"
					h="44px"
					borderRadius="16px"
					p="8px 12px"
					bg="whiteAlpha.100"
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
