import { FC, useMemo } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	Heading,
	ModalHeader,
	InputGroup,
	Input,
	InputRightAddon,
	Flex,
	HStack,
	Text,
	Avatar,
} from "@chakra-ui/react";
import { LinkIcon, ShareIcon } from "../../icons";
import WorkSpaceOwner from "./WorkSpaceOwner";
import AccessMenu from "./AccessMenu";
import ProjectMenu from "./ProjectMenu";

interface IShareProps {
	type: "project" | "space" | "task";
}

function getBtn(type: "project" | "task" | "space", onClick: () => void) {
	switch (type) {
		case "project":
		case "task":
			return (
				<Button
					variant="ghost"
					fontSize="body-md"
					fontWeight="normal"
					ms="auto"
					leftIcon={<ShareIcon w="24px" h="24px" />}
					onClick={onClick}
				>
					اشتراک گذاری
				</Button>
			);
		case "space":
			return (
				<Button
					colorScheme="teal"
					variant="solid"
					fontSize="body-md"
					fontWeight="normal"
					ms="auto"
					leftIcon={<ShareIcon w="24px" h="24px" />}
					onClick={onClick}
				>
					اشتراک گذاری
				</Button>
			);
	}
}
function getHeading(type: "project" | "task" | "space") {
	switch (type) {
		case "project":
			return (
				<Heading textAlign="center" fontWeight="800" fontSize="20px">
					به اشتراک‌گذاری پروژه‌
				</Heading>
			);
		case "task":
			return (
				<Heading textAlign="center" fontWeight="800" fontSize="20px">
					به اشتراک‌گذاری تسک
				</Heading>
			);
		case "space":
			return (
				<Heading textAlign="center" fontWeight="800" fontSize="20px">
					اشتراک‌گذاری ورک‌اسپیس‌
				</Heading>
			);
	}
}

const Share: FC<IShareProps> = ({ type }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const btn = useMemo(() => {
		return getBtn(type, onOpen);
	}, [type]);
	const heading = useMemo(() => {
		return getHeading(type);
	}, [type]);

	const users = [
		{
			name: "sara ahimi",
			email: "saraahimi@gmail.com",
			accessType: "full",
		},
		{
			name: "sara ahimi",
			email: "saraahimi@gmail.com",
			accessType: "full",
		},
		{
			name: "sara ahimi",
			email: "saraahimi@gmail.com",
			accessType: "full",
		},
	];

	return (
		<>
			{btn}
			<Modal
				onClose={onClose}
				isOpen={isOpen}
				isCentered
				blockScrollOnMount={true}
				size="xl"
			>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton left="unset" right="sm" top="sm" />
					<ModalHeader>{heading}</ModalHeader>
					<ModalBody>
						<Flex flexDir="column" gap="24px">
							<InputGroup size="md" borderRadius="8px">
								<Input type="email" placeholder="دعوت با ایمیل" />
								<InputRightAddon p="0">
									<Button
										colorScheme="teal"
										fontWeight="normal"
										borderStartRadius="0"
										p="1rem 2rem"
									>
										ارسال
									</Button>
								</InputRightAddon>
							</InputGroup>
							<HStack justify="space-between">
								<Text display="inline-flex" gap="xs">
									<LinkIcon />
									لینک خصوصی
								</Text>
								<Button
									variant="outline"
									fontWeight="500"
									fontSize="12px"
									p="0 1rem"
								>
									کپی لینک
								</Button>
							</HStack>
							<Flex flexDir="column" gap="sm">
								<Text color="gray.500">اشتراک‌گذاشته شده با</Text>
								<WorkSpaceOwner />
								{users.map((user) => (
									<HStack>
										<Avatar
											size="md"
											name={user.name}
											src="https://bit.ly/tioluwani-kolawole"
										/>
										<Text>{user.email}</Text>
										<AccessMenu />
										{type === "space" ? <ProjectMenu /> : null}
									</HStack>
								))}
							</Flex>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default Share;
