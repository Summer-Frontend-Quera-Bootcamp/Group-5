import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Avatar,
	Box,
	Button,
	Flex,
	Heading,
	Spacer,
	Stack,
	Text,
	chakra,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeSwitch, NewSpaceModal } from "..";
import { switchLoggedIn } from "../../features/userSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { ExitIcon } from "../../icons";
import { headingStyle } from "../../layouts/Authentication/style";
import { AXIOS } from "../../utils/functions/AXIOS";
import SearchIput from "./SearchInput";
import WorkSpaceItem from "./WorkSpaceItem";
import { useState } from "react";

const Sidebar = (): JSX.Element => {
	const [searchValue, setSearchValue] = useState<string>("");
	const workspaces = useAppSelector((state) => state.workspaces);
	const { username, thumbnail } = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const handleExit = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("refresh");
		localStorage.removeItem("user");
		dispatch(switchLoggedIn(false));
		AXIOS.defaults.headers.common.Authorization = "";
		navigate("/");
	};
	return (
		<Flex flexDir="column" h="full" zIndex="100">
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
							<SearchIput value={searchValue} onChange={setSearchValue} />
							<NewSpaceModal />
							{workspaces &&
								workspaces
									.filter((ws) => ws.name.includes(searchValue))
									.map((ws) => (
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

			<Box w="full" gap="4px" mt="auto">
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
