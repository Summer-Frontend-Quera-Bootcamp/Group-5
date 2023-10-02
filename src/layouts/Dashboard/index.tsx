import { Flex, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components";
import { mainPageStyle, sidebarStyle } from "./style";

const DashboardLayout = () => {
	return (
		<Flex wrap="nowrap">
			<Box sx={sidebarStyle}>
				<Sidebar name="amir" />
			</Box>
			<Box sx={mainPageStyle}>
				<Outlet />
			</Box>
		</Flex>
	);
};

export default DashboardLayout;
