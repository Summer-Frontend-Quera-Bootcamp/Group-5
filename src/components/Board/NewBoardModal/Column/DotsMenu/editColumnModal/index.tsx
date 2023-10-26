import { EditIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	HStack,
	Heading,
	MenuItem,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	RadioGroup,
	chakra,
	useDisclosure,
} from "@chakra-ui/react";
import { ValidateInput } from "../../../../..";
import ColorInput from "../../../../../ColorInput";
import { useForm } from "react-hook-form";
import { AXIOS } from "../../../../../../utils/functions/AXIOS";
import { useAppSelector } from "../../../../../../hooks";
import { useParams } from "react-router-dom";
import { useState } from "react";

interface IEditColumnProp {
	boardId: number;
}

const EditColumnModal = ({ boardId }: IEditColumnProp): JSX.Element => {
	const [boardColor, setBoardColor] = useState<TColorSchemes>("red");
	const { accent } = useAppSelector((state) => state.theme);
	const { workspaceId, projectId } = useParams();
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
	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm();
	const {
		isOpen: isFirstModalOpen,
		onOpen: onFirstModalOpen,
		onClose: onFirstModalClose,
	} = useDisclosure();

	const submit = (data: any) => {
		const patchData = {
			name: data.columnName,
			order: 5,
			is_archive: true,
			color: boardColor,
		};
		AXIOS.patch(
			`/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/`,
			patchData
		);
	};

	return (
		<>
			<MenuItem icon={<EditIcon />} onClick={onFirstModalOpen}>
				ویرایش ستون
			</MenuItem>
			<Modal
				onClose={onFirstModalClose}
				isOpen={isFirstModalOpen}
				isCentered
				blockScrollOnMount={true}
				size="xl"
			>
				<ModalOverlay />
				<ModalContent borderRadius="8px" p="24px">
					<ModalCloseButton left="unset" right="sm" top="sm" zIndex="2" />
					<ModalBody overflow="hidden">
						<chakra.form
							display="flex"
							flexDir="column"
							gap="xl"
							onSubmit={handleSubmit(submit)}
						>
							<Heading textAlign="center" fontWeight="800" fontSize="24px">
								ویرایش ستون
							</Heading>
							<ValidateInput
								type="text"
								label="نام برد"
								register={register}
								errors={errors}
								name="columnName"
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
							<Box as="button" onClick={onFirstModalClose}>
								<Button w="full" colorScheme={accent} type="submit">
									ویرایش
								</Button>
							</Box>
						</chakra.form>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default EditColumnModal;
