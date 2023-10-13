import {
	Box,
	Button,
	HStack,
	Input,
	Text,
	Textarea,
	chakra,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../../../hooks";
import { UserProfileCheckmarkIcon } from "../../../icons";
import BookmarkInput from "./BookmarkInput";
import CustomDateInput from "./CustomDateInput";
import CustomFileInput from "./CustomFileInput";
import PriorityList from "./PriorityList";

const NewTaskForm: FC<INewTaskFormProps> = ({ project }) => {
	const { accent } = useAppSelector((state) => state.theme);
	const [attachment, setAttachment] = useState();
	const [cover, setCover] = useState();
	const [priority, setPriority] = useState<TPriority>("پایین");
	const { register, handleSubmit } = useForm();

	const handleFileChange = (file: any) => {
		setAttachment(file);
	};
	const handleCoverChange = (file: any) => {
		setCover(file);
	};

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		function getPriority(opt: TPriority) {
			switch (opt) {
				case "فوری":
					return 1;
				case "بالا":
					return 2;
				case "متوسط":
					return 3;
				case "پایین":
				case "حذف اولویت":
					return 4;
			}
		}
		const reqBody = {
			name: data.taskTitle,
			description: data.taskDescription,
			priority: getPriority(priority),
			attachment: JSON.stringify(attachment),
			thumbnail: JSON.stringify(cover),
			order: Math.floor(Math.random() * 10),
		};

		console.log(JSON.stringify(reqBody));
	};

	return (
		<chakra.form
			display="flex"
			flexDir="column"
			alignItems="start"
			gap="lg"
			onSubmit={handleSubmit(onSubmit)}
		>
			<HStack gap="xs">
				<Box w="16px" h="16px" borderRadius="2px" bg="gray-secondary"></Box>
				<Input
					type="text"
					placeholder="عنوان تسک"
					fontSize="24px"
					{...register("taskTitle", { required: true })}
				/>
			</HStack>
			<HStack gap="xs">
				<Text>در</Text>
				<Box border="1px" borderColor="gray.300" borderRadius="6px" p="5px 8px">
					{project}
				</Box>
				<Text>برای</Text>
				<Box
					border="1px"
					borderColor="gray.300"
					color="gray.300"
					borderStyle="dashed"
					borderRadius="full"
					p="4.25px"
				>
					<UserProfileCheckmarkIcon w="20px" h="20px" />
				</Box>
			</HStack>
			<HStack w="full" h="200px">
				<Textarea
					{...register("taskDescription", { required: true })}
					placeholder="توضیحاتی برای این تسک بنویسید"
					w="full"
					h="full"
					resize="none"
				/>
			</HStack>
			<HStack gap="sm">
				<Text>افزودن پیوست</Text>
				<Box>
					<CustomFileInput file={attachment} onChange={handleFileChange} />
				</Box>
			</HStack>
			<HStack gap="sm">
				<Text>افزودن کاور</Text>
				<Box>
					<CustomFileInput file={cover} onChange={handleCoverChange} />
				</Box>
			</HStack>
			<HStack w="full">
				<HStack gap="md">
					<PriorityList priority={priority} onChange={setPriority} />
					<CustomDateInput onChange={handleCoverChange} />
					<BookmarkInput />
				</HStack>
				<Button
					type="submit"
					colorScheme={accent}
					fontWeight="normal"
					ms="auto"
				>
					ساختن تسک
				</Button>
			</HStack>
		</chakra.form>
	);
};

export default NewTaskForm;

