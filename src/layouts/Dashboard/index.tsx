import { Flex, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components";

const DashboardLayout = () => {
	return (
		<Flex wrap="nowrap">
			{/* todo: create sidebar */}
			<Box flex="0 0 340px" borderEnd="1px" ps="xl" pe="md" py="lg" h="100dvh">
				<Sidebar name="amir"/>
			</Box>
			<Box
				flex="1 0 calc(100% - 340px)"
				ps="md"
				pe="xl"
				py="lg"
				overflowX="auto"
			>
				<Outlet />
			</Box>
		</Flex>
	);
};

export default DashboardLayout;
