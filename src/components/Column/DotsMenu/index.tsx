import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	ModalBody,
	Heading,
	Box,
	Button,
	chakra,
	FormControl,
	FormLabel,
	RadioGroup,
	HStack,
} from "@chakra-ui/react";
import { DotsIcon } from "../../../icons";
import { AddIcon, DownloadIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { ValidateInput } from "../..";
import { useAppSelector } from "../../../hooks";
import { useForm } from "react-hook-form";
import { AXIOS } from "../../../utils/functions/AXIOS";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ColorInput from "../../ColorInput";

interface IDotsMenuProp {
	boardId: number;
}
const DotsMenu = ({ boardId }: IDotsMenuProp): JSX.Element => {
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

	const handleDelete = () => {
		AXIOS.delete(
			`/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/`
		);
	};
	return (
		<Menu>
			<MenuButton as="button" w="24px" h="24px">
				<DotsIcon w="20px" h="20px" />
			</MenuButton>
			<MenuList>
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
				<MenuItem icon={<AddIcon />}>افزودن تسک</MenuItem>
				<MenuItem icon={<DownloadIcon />}>آرشیو تمام تسک ها</MenuItem>
				<MenuItem icon={<DeleteIcon />} color="#E53E3E" onClick={handleDelete}>
					حذف ستون
				</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default DotsMenu;
