import { Flex, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components";
import { mainPageStyle, sidebarStyle } from "./style";
import WorkSpaceItem from "../../components/Sidebar/WorkSpaceItem";
import ProjectItem from "../../components/Sidebar/ProjectItem";
import { useEffect, useState } from "react";
import { getAllWorkSpaces } from "../../services/api";

const DashboardLayout = () => {
	const [workSpaces, setWorkSpaces] = useState<any[]>();
	useEffect(() => {
		getAllWorkSpaces().then((res) => setWorkSpaces(res.data));
	}, []);

	return (
		<Flex wrap="nowrap">
			<Box sx={sidebarStyle}>
				<Sidebar
					name="amir"
					items={workSpaces?.map((x) => (
						<WorkSpaceItem color={x.color} content={x.name} key={x.id} />
					))}
				/>
			</Box>
			<Box sx={mainPageStyle}>
				<Outlet />
			</Box>
		</Flex>
	);
};

export default DashboardLayout;
