import { Divider, Flex, Heading, VStack } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { AXIOS } from "../../utils/functions/AXIOS";
import ProjectRow from "./ProjectRow";

export async function WorkSpaceLoader() {
	const res = await AXIOS.get("/workspaces/");
	return res.data;
}

const WorkSpacePage = () => {
	const workspaces = useLoaderData() as IWorkspace[];
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
