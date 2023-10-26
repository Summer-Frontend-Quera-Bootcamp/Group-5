import {
	Avatar,
	Button,
	Flex,
	HStack,
	Heading,
	Input,
	InputGroup,
	InputRightAddon,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { FC, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { LinkIcon } from "../../icons";
import { AXIOS } from "../../utils/functions/AXIOS";
import AccessMenu from "./AccessMenu";
import ProjectMenu from "./ProjectMenu";
import ShareButton from "./ShareButton";
import WorkSpaceOwner from "./WorkSpaceOwner";
import { sendInvitation } from "../../services/api";

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

const Share: FC<IShareProps> = ({ type, workspaceId, projectId }) => {
	const [email, setEmail] = useState("");
	const { accent } = useAppSelector((state) => state.theme);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [users, setUsers] = useState<IUsersResponse[]>();
	const loc = useLocation();
	const link = `http://localhost:3000` + loc.pathname;

	const heading = useMemo(() => {
		return getHeading(type);
	}, [type]);

	useEffect(() => {
		AXIOS.get(`/workspaces/${workspaceId}/projects/${projectId}/members/`).then(
			(res) => {
				setUsers(res.data);
			}
		);
	}, []);

	return (
		<>
			<ShareButton type={type} onClick={onOpen} />
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
								<Input
									type="email"
									placeholder="دعوت با ایمیل"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<InputRightAddon p="0">
									<Button
										colorScheme={accent}
										fontWeight="normal"
										borderStartRadius="0"
										p="1rem 2rem"
										onClick={() => {
											sendInvitation(email, link);
											alert("دعوت فرستاده شد");
										}}
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
									onClick={() =>
										navigator.clipboard
											.writeText(link)
											.then(() => alert("لینک پروژه کپی شد"))
									}
								>
									کپی لینک
								</Button>
							</HStack>
							<Flex flexDir="column" gap="sm">
								<Text color="gray.500">اشتراک‌گذاشته شده با</Text>
								<WorkSpaceOwner />
								{users &&
									users.map(({ user }) => (
										<HStack>
											<Avatar
												size="md"
												name={user.username}
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
