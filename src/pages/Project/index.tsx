import { useEffect, useState } from "react";
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
} from "../../icons";
import {
	newTaskButtonStyle,
	searchFilterWrapperStyle,
	searchInputStyle,
	tabIndicatorStyle,
	tabListStyle,
	tabStyle,
} from "./style";
import { Board, FilterModal, Share, Calendar } from "../../components";
import { useDispatch } from "react-redux";
import { clearFilters } from "../../features/filterSlice";

const Divider = () => {
	return <chakra.span w="1px" h="22px" bg="gray.400"></chakra.span>;
};

const ProjectPage = () => {
	const [activePage, setActivePage] = useState<boolean[]>([true, false, false]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(clearFilters());
		return () => {
			dispatch(clearFilters());
		};
	}, []);

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
						color={activePage[0] ? "cyan-primary" : "unset"}
					>
						<ListIcon w="24px" h="24px" />
						نمایش لیستی
					</Tab>
					<Divider />
					<Tab
						sx={tabStyle}
						onClick={() => setActivePage([false, true, false])}
						color={activePage[1] ? "cyan-primary" : "unset"}
					>
						<ArtBoardIcon w="24px" h="24px" />
						نمایش ستونی
					</Tab>
					<Divider />
					<Tab
						sx={tabStyle}
						onClick={() => setActivePage([false, false, true])}
						color={activePage[2] ? "cyan-primary" : "unset"}
					>
						<CalendarIcon w="24px" h="24px" />
						تقویم
					</Tab>
					<Divider />
					<Share type="project" />
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
					{/* todo: implement filters data */}
					<FilterModal />
				</Flex>
				{/* todo: create tap panels */}
				<TabPanels>
					<TabPanel>
						<p>one!</p>
					</TabPanel>
					<TabPanel>
						<Board />
					</TabPanel>
					<TabPanel p="0" h="80dvh">
						<Calendar />
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
