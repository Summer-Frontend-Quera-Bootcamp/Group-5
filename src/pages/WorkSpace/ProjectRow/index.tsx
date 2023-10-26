import { useEffect, useMemo, useState } from "react";
import { AXIOS } from "../../../utils/functions/AXIOS";
import { Flex } from "@chakra-ui/react";
import { NewProjectModal } from "../../../components";
import ProjectLink from "../ProjectLink";
import { useAppSelector } from "../../../hooks";

const ProjectRow = ({ workspaceId, color }: IProjectRowProps) => {
	const allProjects = useAppSelector((state) => state.projects);
	const projects = allProjects.find(
		(item) => item.workspaceId === workspaceId
	)!;
	return (
		<Flex gap="lg" wrap="nowrap">
			{projects?.projectsList.length > 0 ? (
				projects?.projectsList.map((p) => (
					<ProjectLink
						key={p.id}
						color={color}
						workspaceId={workspaceId}
						projectId={p.id}
						projectTitle={p.name}
					>
						{p.name}
					</ProjectLink>
				))
			) : (
				<NewProjectModal color={color} workspaceId={workspaceId} />
			)}
		</Flex>
	);
};

export default ProjectRow;
