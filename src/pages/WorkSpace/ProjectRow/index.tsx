import { useEffect, useState } from "react";
import { AXIOS } from "../../../utils/functions/AXIOS";
import { Flex } from "@chakra-ui/react";
import { NewProjectModal } from "../../../components";
import ProjectLink from "../ProjectLink";

const ProjectRow = ({ workspaceId, color }: IProjectRowProps) => {
	const [projects, setProjects] = useState<IProject[]>([]);
	useEffect(() => {
		const getProjects = async (): Promise<IProject[]> => {
			const res = await AXIOS.get(`/workspaces/${workspaceId}/projects/`);
			return res.data;
		};

		getProjects().then((res) => setProjects(res));
	}, [workspaceId]);
	return (
		<Flex gap="lg" wrap="nowrap">
			{projects.length > 0 ? (
				projects.map((p) => (
					<ProjectLink
						key={p.id}
						color={color}
						projectId={p.id}
						projectTitle={p.name}
					>
						{p.name}
					</ProjectLink>
				))
			) : (
				<NewProjectModal />
			)}
		</Flex>
	);
};

export default ProjectRow;
