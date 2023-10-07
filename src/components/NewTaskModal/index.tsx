import {
	Box,
	Button,
	HStack,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	Text,
	Textarea,
	VStack,
	useDisclosure,
} from "@chakra-ui/react";
import { ChangeEvent, FC, useState } from "react";
import { PriorityList } from "..";
import {
	AddIcon,
	AddSquareIcon,
	BookmarkIcon,
	CalendarIcon,
	UserProfileCheckmarkIcon,
} from "../../icons";
import CustomFileInput from "./CustomFileInput";
import { useAppDispatch, useAppSelector } from "../../hooks";

const taskDetailButtonStyle = {
	bg: "none",
	alignItems: "center",
	justifyContent: "center",
	border: "1px dashed",
	borderRadius: "full",
	p: "6px",
	w: "50px",
	h: "50px",
	color: "gray.400",
};

const NewTaskModal: FC<{ place: "board" | "projectPage"; project: string }> = ({
	place,
	project,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { accent } = useAppSelector((state) => state.theme);
	const dispatch = useAppDispatch();
	let [taskDescription, setTaskDescription] = useState("");

	let handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setTaskDescription(e.target.value);
	};

	const handleFileChange = (file: undefined) => {
		console.log(file);
	};

	const getBtn = (place: "board" | "projectPage") => {
		switch (place) {
			case "board":
				return (
					<Button variant="unstyled" colorScheme={accent} onClick={onOpen}>
						<AddIcon w="24px" h="24px" />
					</Button>
				);
			case "projectPage":
				return (
					<Button
						pos="fixed"
						bottom="30px"
						left="40px"
						colorScheme={accent}
						leftIcon={<AddSquareIcon w="24px" h="24px" />}
						onClick={onOpen}
					>
						تسک جدید
					</Button>
				);
		}
	};

	return (
		<>
			{getBtn(place)}
			<Modal
				onClose={onClose}
				isOpen={isOpen}
				isCentered
				blockScrollOnMount={true}
				size="5xl"
			>
				<ModalOverlay />
				<ModalContent borderRadius="8px" p="24px">
					<ModalCloseButton left="sm" top="sm" />
					<ModalBody p="0">
						<VStack align="start" gap="lg">
							<HStack gap="xs">
								<Box
									w="16px"
									h="16px"
									borderRadius="2px"
									bg="gray-secondary"
								></Box>
								<Text fontSize="24px">عنوان تسک</Text>
							</HStack>
							<HStack gap="xs">
								<Text>در</Text>
								<Box
									border="1px"
									borderColor="gray.300"
									borderRadius="6px"
									p="5px 8px"
								>
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
									value={taskDescription}
									onChange={handleInputChange}
									placeholder="توضیحاتی برای این تسک بنویسید"
									w="full"
									h="full"
									resize="none"
								/>
							</HStack>
							<HStack gap="sm">
								<Text>افزودن پیوست</Text>
								<Box>
									<CustomFileInput onChange={handleFileChange} />
								</Box>
							</HStack>
							<HStack gap="sm">
								<Text>افزودن کاور</Text>
								<Box>
									<CustomFileInput onChange={handleFileChange} />
								</Box>
							</HStack>
							<HStack w="full">
								<HStack gap="md">
									<PriorityList />
									<Button sx={taskDetailButtonStyle}>
										<CalendarIcon w="30px" h="30px" />
									</Button>
									<Button sx={taskDetailButtonStyle}>
										<BookmarkIcon w="30px" h="30px" />
									</Button>
								</HStack>
								<Button colorScheme={accent} fontWeight="normal" ms="auto">
									ساختن تسک
								</Button>
							</HStack>
						</VStack>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default NewTaskModal;
