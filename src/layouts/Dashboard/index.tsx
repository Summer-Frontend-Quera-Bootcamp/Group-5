import { Flex, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
	return (
		<Flex wrap="nowrap">
			{/* todo: create sidebar */}
			<Box flex="0 0 340px" borderEnd="1px" ps="xl" pe="md" py="lg" h="100dvh">
				Sidebar
			</Box>
			<Box flex="1 0" ps="md" pe="xl" py="lg">
				<Outlet />
			</Box>
		</Flex>
	);
};

export default DashboardLayout;
