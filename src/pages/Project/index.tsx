// import {
// 	Flex,
// 	Heading,
// 	Input,
// 	InputGroup,
// 	InputLeftElement,
// 	Tab,
// 	TabIndicator,
// 	TabList,
// 	TabPanel,
// 	TabPanels,
// 	Tabs,
// 	chakra,
// } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import { Board, Calendar, FilterModal, Share } from "../../components";
// import NewTaskModal from "../../components/NewTaskModal";
// import { clearFilters } from "../../features/filterSlice";
// import { ArtBoardIcon, CalendarIcon, ListIcon, SearchIcon } from "../../icons";
// import {
// 	searchFilterWrapperStyle,
// 	searchInputStyle,
// 	tabIndicatorStyle,
// 	tabListStyle,
// 	tabStyle,
// } from "./style";
// import { useAppDispatch, useAppSelector } from "../../hooks";

// const Divider = () => {
// 	return <chakra.span w="1px" h="22px" bg="gray.400"></chakra.span>;
// };

// const ProjectPage = () => {
// 	const [activePage, setActivePage] = useState<boolean[]>([true, false, false]);
// 	const dispatch = useAppDispatch();
// 	const { accent, highlight } = useAppSelector((state) => state.theme);

// 	useEffect(() => {
// 		dispatch(clearFilters());
// 		return () => {
// 			dispatch(clearFilters());
// 		};
// 	}, []);

// 	return (
// 		<>
// 			<Tabs position="relative" variant="unstyled" isLazy>
// 				<TabList sx={tabListStyle}>
// 					<Heading as="h3" fontSize="heading-xs">
// 						پروژه اول
// 					</Heading>
// 					<Divider />
// 					<Tab
// 						sx={tabStyle}
// 						_hover={{ color: highlight }}
// 						onClick={() => setActivePage([true, false, false])}
// 						color={activePage[0] ? highlight : "unset"}
// 					>
// 						<ListIcon w="24px" h="24px" />
// 						نمایش لیستی
// 					</Tab>
// 					<Divider />
// 					<Tab
// 						sx={tabStyle}
// 						_hover={{ color: highlight }}
// 						onClick={() => setActivePage([false, true, false])}
// 						color={activePage[1] ? highlight : "unset"}
// 					>
// 						<ArtBoardIcon w="24px" h="24px" />
// 						نمایش ستونی
// 					</Tab>
// 					<Divider />
// 					<Tab
// 						sx={tabStyle}
// 						_hover={{ color: highlight }}
// 						onClick={() => setActivePage([false, false, true])}
// 						color={activePage[2] ? highlight : "unset"}
// 					>
// 						<CalendarIcon w="24px" h="24px" />
// 						تقویم
// 					</Tab>
// 					<Divider />
// 					<Share type="project" />
// 				</TabList>
// 				<TabIndicator sx={tabIndicatorStyle} bg={highlight} />
// 				{/* todo: create filters option */}
// 				<Flex sx={searchFilterWrapperStyle}>
// 					<InputGroup w="200px">
// 						<InputLeftElement pointerEvents="none">
// 							<SearchIcon w="24px" h="24px" />
// 						</InputLeftElement>
// 						<Input
// 							sx={searchInputStyle}
// 							type="search"
// 							placeholder="جستجو بین تسک‌ها"
// 						/>
// 					</InputGroup>
// 					<Divider />
// 					{/* todo: implement filters data */}
// 					<FilterModal />
// 				</Flex>
// 				{/* todo: create tap panels */}
// 				<TabPanels>
// 					<TabPanel>
// 						<p>one!</p>
// 					</TabPanel>
// 					<TabPanel>
// 						<Board />
// 					</TabPanel>
// 					<TabPanel p="0" h="80dvh">
// 						<Calendar />
// 					</TabPanel>
// 				</TabPanels>
// 			</Tabs>
// 			<NewTaskModal place="projectPage" project="پروژه اول" />
// 		</>
// 	);
// };

// export default ProjectPage;
import React, { useState } from "react";
import {
	Button,
	Flex,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	ListItem,
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
	FlagIcon,
	JustifyRightIcon,
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
import {
	Board,
	FilterModal,
	Share,
	Calendar,
	PriorityFlag,
} from "../../components";
import List from "../../components/List"; // Import the List component

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
					<FilterModal
						initialFilters={[
							{ category: "", condition: "است", filterOption: "" },
						]}
					/>
				</Flex>
				{/* todo: create tap panels */}
				<TabPanels>
					<TabPanel>
						<List
							listData={[
								{
									avatar: "path/to/avatar2",
									deadline: new Date("2023.05.02"),
									priority: <FlagIcon />,
									description: <JustifyRightIcon />,
								},
							]}
							boxColor="#ff1493"
							title="Pending"
							width={85}
							height={45}
						/>

						<List
							listData={[
								{
									avatar: "path/to/avatar2",
									deadline: new Date("2023.05.02"),
									priority: <FlagIcon />,
									description: <JustifyRightIcon />,
								},
							]}
							boxColor="#FF6735"
							title="In Progress"
							width={105}
							height={45}
						/>

						<List
							listData={[]}
							boxColor="#2ECC71"
							title="Done"
							width={60}
							height={55}
						/>
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