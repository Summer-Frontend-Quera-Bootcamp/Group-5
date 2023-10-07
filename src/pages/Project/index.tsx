import {
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
import { useEffect, useState } from "react";
import { Board, Calendar, FilterModal, Share } from "../../components";
import NewTaskModal from "../../components/NewTaskModal";
import { clearFilters } from "../../features/filterSlice";
import { ArtBoardIcon, CalendarIcon, ListIcon, SearchIcon } from "../../icons";
import {
  searchFilterWrapperStyle,
  searchInputStyle,
  tabIndicatorStyle,
  tabListStyle,
  tabStyle,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

const Divider = () => {
	return <chakra.span w="1px" h="22px" bg="gray.400"></chakra.span>;
};

const ProjectPage = () => {
	const [activePage, setActivePage] = useState<boolean[]>([true, false, false]);
	const dispatch = useDispatch();
	const { accent, highlight } = useSelector((state: RootState) => state.theme);

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
						_hover={{ color: highlight }}
						onClick={() => setActivePage([true, false, false])}
						color={activePage[0] ? highlight : "unset"}
					>
						<ListIcon w="24px" h="24px" />
						نمایش لیستی
					</Tab>
					<Divider />
					<Tab
						sx={tabStyle}
						_hover={{ color: highlight }}
						onClick={() => setActivePage([false, true, false])}
						color={activePage[1] ? highlight : "unset"}
					>
						<ArtBoardIcon w="24px" h="24px" />
						نمایش ستونی
					</Tab>
					<Divider />
					<Tab
						sx={tabStyle}
						_hover={{ color: highlight }}
						onClick={() => setActivePage([false, false, true])}
						color={activePage[2] ? highlight : "unset"}
					>
						<CalendarIcon w="24px" h="24px" />
						تقویم
					</Tab>
					<Divider />
					<Share type="project" />
				</TabList>
				<TabIndicator sx={tabIndicatorStyle} bg={highlight} />
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
			<NewTaskModal place="projectPage" project="پروژه اول" />
		</>
	);
};

export default ProjectPage;
