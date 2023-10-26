import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components";
import { setWorkspaceItems } from "../../features/workspaceSlice";
import { useAppDispatch } from "../../hooks";
import { mainPageStyle, sidebarStyle } from "./style";
import { setProjectItems } from "../../features/projectSlice";

const DashboardLayout = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setWorkspaceItems());
		dispatch(setProjectItems());
	}, []);
	return (
		<Flex wrap="nowrap">
			<Box sx={sidebarStyle}>
				<Sidebar />
			</Box>
			<Box sx={mainPageStyle}>
				<Outlet />
			</Box>
		</Flex>
	);
};

export default DashboardLayout;
