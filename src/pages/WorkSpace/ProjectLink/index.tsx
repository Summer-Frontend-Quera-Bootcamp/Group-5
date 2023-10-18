import { Link } from "react-router-dom";
import { getGradient } from "../../../utils/functions/getGradient";
import { chakra } from "@chakra-ui/react";
import { projectStyle } from "../style";

const ProjectLink = ({
	workspaceId,
	projectId,
	projectTitle,
	color,
	children,
}: IProjectProps) => {
	const gradient = getGradient(color);
	return (
		<chakra.a
			as={Link}
			to={`workspaces/${workspaceId}/projects/${projectId}`}
			data-title={projectTitle}
			sx={projectStyle}
			bgGradient={`linear(to-l, ${gradient[0]}, ${gradient[1]})`}
		>
			{children}
		</chakra.a>
	);
};

export default ProjectLink;
