import {
	Heading,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Text,
	Button,
	Box,
	Stack,
	Avatar,
	Spacer,
	Flex,
} from "@chakra-ui/react";
import { headingStyle } from "../../layouts/Authentication/style";
import { NewSpaceModal } from "..";
import { ExitIcon } from "../../icons";
import SearchIput from "./SearchInput";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { switchLoggedIn } from "../../features/userSlice";
import { AXIOS } from "../../utils/functions/AXIOS";
import DarkModeSwitch from "../DarkModeSwitch";
import { chakra } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAllWorkSpaces } from "../../services/api";
import WorkSpaceItem from "./WorkSpaceItem";

const Sidebar = (): JSX.Element => {
	const [workSpaces, setWorkSpaces] = useState<any[]>([]);
	const { username, thumbnail } = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		getAllWorkSpaces().then((res) => setWorkSpaces(res.data));
	}, []);
	const handleExit = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("refresh");
		localStorage.removeItem("user");
		dispatch(switchLoggedIn(false));
		AXIOS.defaults.headers.common.Authorization = "";
		navigate("/");
	};
	return (
		<Flex flexDir="column" h="full">
			<Heading sx={headingStyle}>کوئرا تسک منیجر</Heading>

			<Box gap="50px" overflowY="auto" overflowX="hidden">
				<Accordion w="274px" allowToggle>
					<AccordionItem>
						<AccordionButton>
							<Text flex="1" align="right" fontWeight="800" lineHeight="28px">
								ورک اسپیس ها
							</Text>
							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel pb={4} px="0">
							<SearchIput />
							<NewSpaceModal />
							{workSpaces &&
								workSpaces?.map((ws) => (
									<WorkSpaceItem
										color={ws.color}
										content={ws.name}
										workSpaceKey={ws.id}
									/>
								))}
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</Box>

			<Box w="full" h="50px" gap="4px" mt="auto">
				<chakra.a as={Link} to="/profile">
					<Stack direction="row" w="144px" spacing="4px">
						<Avatar size="sm" name={username} src={thumbnail} mb={2} />
						<Text p="4px" fontWeight="500px" align="right">
							{username}
						</Text>
					</Stack>
				</chakra.a>
				<Box>
					<Flex>
						<Button
							leftIcon={<ExitIcon w="20px" h="20px" />}
							gap="4px"
							p={1}
							color="#818181"
							onClick={handleExit}
						>
							خروج
						</Button>
						<Spacer />
						<DarkModeSwitch />
					</Flex>
				</Box>
			</Box>
		</Flex>
	);
};

export default Sidebar;
