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
	Switch,
	useColorMode,
} from "@chakra-ui/react";
import { headingStyle } from "../../layouts/Authentication/style";
import { NewSpaceModal } from "..";
import { ExitIcon } from "../../icons";

interface ISidebarProp {
	items?: any[];
	name: string;
	src?: string;
}
const Sidebar = ({ items, name, src }: ISidebarProp): JSX.Element => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Flex flexDir="column" h="full">
			<Heading sx={headingStyle}>کوئرا تسک منیجر</Heading>

			<Box gap="8px">
				<Accordion w="274px" allowToggle>
					<AccordionItem>
						<AccordionButton>
							<Text flex="1" align="right" fontWeight="800" lineHeight="28px">
								ورک اسپیس ها
							</Text>
							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel pb={4} px="0">
							<NewSpaceModal />
							{items && items.map((x) => x)}
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</Box>

			<Box w="full" h="50px" gap="4px" mt="auto">
				<Stack direction="row" w="144px" spacing="4px">
					<Avatar size="sm" name={name} src={src} mb={2} />
					<Text p="4px" fontWeight="500px" align="right">
						{name}
					</Text>
				</Stack>
				<Box>
					<Flex>
						<Button
							leftIcon={<ExitIcon w="20px" h="20px" />}
							gap="4px"
							p={1}
							color="#818181"
						>
							خروج
						</Button>
						<Spacer />
						<Switch w="64px" mt="3px" onChange={toggleColorMode} isInvalid />
					</Flex>
				</Box>
			</Box>
		</Flex>
	);
};

export default Sidebar;
