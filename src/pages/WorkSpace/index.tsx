import { Divider, Flex, Heading, VStack } from "@chakra-ui/react";
import ProjectRow from "./ProjectRow";
import { useEffect, useState } from "react";
import { getAllWorkSpaces } from "../../services/api";

const WorkSpacePage = () => {
	const [workSpaces, setWorkSpaces] = useState<any[]>([]);
	useEffect(() => {
		getAllWorkSpaces().then((res) => setWorkSpaces(res.data));
	}, [workSpaces]);
	return (
		<Flex flexDir="column" w="100%">
			{workSpaces.map((ws, idx, arr) => (
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
