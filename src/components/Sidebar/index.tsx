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
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { headingStyle } from "../../layouts/Authentication/style";
import { NewSpaceModal } from "..";

interface ISidebarProp {
	items?: any[];
	name: string;
	src?: string;
}
const Sidebar = ({ items, name, src }: ISidebarProp): JSX.Element => {
	return (
		<Flex flexDir="column" h="full">
			<Heading sx={headingStyle}>کوئرا تسک منیجر</Heading>

			<Box gap="8px">
				<Accordion w="274px" allowToggle>
					<AccordionItem>
						<AccordionButton>
							<Text
								w="98px"
								h="28px"
								flex="1"
								align="right"
								fontWeight="800"
								fontSize="16px"
								lineHeight="27.64px"
							>
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
				<Stack direction="row" h="37px" w="144px" spacing="4px">
					<Avatar size="sm" name={name} src={src} />
					<Text
						pt="4px"
						w="100px"
						h="28px"
						fontSize="16px"
						color="black"
						fontWeight="500px"
						align="right"
						lineHeight="27.64px"
					>
						{name}
					</Text>
				</Stack>
				<Box p="0 xs">
					<Flex>
						<Button
							leftIcon={<ArrowForwardIcon />}
							w="64px"
							h="28px"
							gap="4px"
							borderColor="white"
							color="#818181"
							colorScheme="teal"
							variant="outline"
						>
							خروج
						</Button>
						<Spacer />
						<Switch w="64px" h="36px" mt="3px" isInvalid />
					</Flex>
				</Box>
			</Box>
		</Flex>
	);
};

export default Sidebar;
