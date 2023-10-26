import { Divider, Flex, Heading, VStack } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import ProjectRow from "./ProjectRow";
import { setProjectItems } from "../../features/projectSlice";

const WorkSpacePage = () => {
	const workspaces = useAppSelector((state) => state.workspaces);
	return (
		<Flex flexDir="column" w="100%">
			{workspaces.map((ws, idx, arr) => (
				<VStack align="start" gap="lg" mb="lg">
					<Heading as="h4" fontSize="24px" fontWeight="extrabold">
						{ws.name}
					</Heading>
					<ProjectRow key={ws.id} workspaceId={ws.id} color={ws.color} />
					{arr[idx + 1] && <Divider />}
				</VStack>
			))}
		</Flex>
	);
};

export default WorkSpacePage;
