import { useState } from "react";
import {
	Button,
	Flex,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	Tab,
	TabIndicator,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	chakra,
} from "@chakra-ui/react";
import {
	AddSquareIcon,
	ArtBoardIcon,
	CalendarIcon,
	ListIcon,
	SearchIcon,
	ShareIcon,
} from "../../icons";
import {
	newTaskButtonStyle,
	searchFilterWrapperStyle,
	searchInputStyle,
	shareButtonStyle,
	tabIndicatorStyle,
	tabListStyle,
	tabStyle,
} from "./style";

const Divider = () => {
	return <chakra.span w="1px" h="22px" bg="gray.400"></chakra.span>;
};

const ProjectPage = () => {
	const [activePage, setActivePage] = useState<boolean[]>([true, false, false]);
	return (
		<>
			<Tabs position="relative" variant="unstyled" isLazy>
				<TabList sx={tabListStyle}>
					<Heading as="h3" fontSize="heading-xs">
						پروژه اول
					</Heading>
					<Divider />
					<Tab
						sx={tabStyle}
						onClick={() => setActivePage([true, false, false])}
						color={activePage[0] ? "cyan-primary" : "black"}
					>
						<ListIcon w="24px" h="24px" />
						نمایش لیستی
					</Tab>
					<Divider />
					<Tab
						sx={tabStyle}
						onClick={() => setActivePage([false, true, false])}
						color={activePage[1] ? "cyan-primary" : "black"}
					>
						<ArtBoardIcon w="24px" h="24px" />
						نمایش ستونی
					</Tab>
					<Divider />
					<Tab
						sx={tabStyle}
						onClick={() => setActivePage([false, false, true])}
						color={activePage[2] ? "cyan-primary" : "black"}
					>
						<CalendarIcon w="24px" h="24px" />
						تقویم
					</Tab>
					<Divider />
					<Button
						variant="ghost"
						sx={shareButtonStyle}
						leftIcon={<ShareIcon w="24px" h="24px" />}
					>
						اشتراک گذاری
					</Button>
				</TabList>
				<TabIndicator sx={tabIndicatorStyle} />
				{/* todo: create filters option */}
				<Flex sx={searchFilterWrapperStyle}>
					<InputGroup w="200px">
						<InputLeftElement pointerEvents="none">
							<SearchIcon w="24px" h="24px" />
						</InputLeftElement>
						<Input
							sx={searchInputStyle}
							type="search"
							placeholder="جستجو بین تسک‌ها"
						/>
					</InputGroup>
					<Divider />
				</Flex>
				{/* todo: create tap panels */}
				<TabPanels>
					<TabPanel>
						<p>one!</p>
					</TabPanel>
					<TabPanel>
						<p>two!</p>
					</TabPanel>
					<TabPanel>
						<p>three!</p>
					</TabPanel>
				</TabPanels>
			</Tabs>
			<Button
				sx={newTaskButtonStyle}
				colorScheme="teal"
				leftIcon={<AddSquareIcon w="24px" h="24px" />}
			>
				تسک جدید
			</Button>
		</>
	);
};

export default ProjectPage;
