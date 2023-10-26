import {
	Flex,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	chakra,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Board, Calendar, FilterModal, List, Share } from "../../components";
import NewTaskModal from "../../components/NewTaskModal";
import { clearFilters } from "../../features/filterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { ArtBoardIcon, CalendarIcon, ListIcon, SearchIcon } from "../../icons";
import { getProject } from "../../services/api";
import {
	searchFilterWrapperStyle,
	searchInputStyle,
	tabListStyle,
	tabStyle,
} from "./style";

const Divider = () => {
	return <chakra.span w="1px" h="22px" bg="gray.400"></chakra.span>;
};

const ProjectPage = () => {
	const [activePage, setActivePage] = useState<boolean[]>([false, true, false]);
	const [activeProject, setActiveProject] = useState<any>();
	const dispatch = useAppDispatch();
	const { highlight } = useAppSelector((state) => state.theme);
	const { workspaceId, projectId } = useParams();
	useEffect(() => {
		getProject(+workspaceId!, +projectId!).then((res: any) => {
			setActiveProject(res.data);
		});
		dispatch(clearFilters());
		return () => {
			dispatch(clearFilters());
		};
	}, [projectId]);

	return (
		<>
			<Tabs position="relative" variant="unstyled" isLazy defaultIndex={1}>
				<TabList sx={tabListStyle}>
					<Heading as="h3" fontSize="heading-xs">
						{activeProject?.name}
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
					<Share
						type="project"
						workspaceId={+workspaceId!}
						projectId={+projectId!}
					/>
				</TabList>
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
					<FilterModal />
				</Flex>
				<TabPanels>
					<TabPanel>
						<List />
					</TabPanel>
					<TabPanel w="full" overflowX="auto">
						<Board />
					</TabPanel>
					<TabPanel p="0" h="80dvh">
						<Calendar
							workspaceId={+workspaceId!}
							projectId={+projectId!}
							type="page"
						/>
					</TabPanel>
				</TabPanels>
			</Tabs>
			<NewTaskModal place="projectPage" project={activeProject?.name} />
		</>
	);
};

export default ProjectPage;
