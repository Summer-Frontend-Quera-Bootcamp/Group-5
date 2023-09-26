import { Divider, Flex, Heading, VStack, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { theme } from "../../theme";
import { ProjectStyle } from "./style";

const Project = ({
	projectId,
	projectTitle,
	color,
	children,
}: IProjectProps) => {
	const themeColors = theme.colors as Record<string, string>;
	const gradient = [`${color}-primary`, themeColors[`${color}-primary`] + "77"];
	return (
		<chakra.a
			as={Link}
			to={projectId}
			data-title={projectTitle}
			sx={ProjectStyle}
			bgGradient={`linear(to-l, ${gradient[0]}, ${gradient[1]})`}
		>
			{children}
		</chakra.a>
	);
};

const ProjectRow = ({ projects }: IProjectRowProps) => {
	return (
		<Flex gap="lg" wrap="nowrap">
			{projects.length > 0 ? (
				projects.map((p) => (
					<Project
						key={p.projectId}
						color={p.color}
						projectId={p.projectId}
						projectTitle={p.title}
					>
						{p.title}
					</Project>
				))
			) : (
				// todo: add new task button here
				<div>new task</div>
			)}
		</Flex>
	);
};

const WorkSpacePage = () => {
	const workspaces = [
		`درس مدیریت پروژه`,
		`کارهای شخصیی`,
		`درس کامپایلر`,
		`درس طراحی الگوریتم`,
	];
	const projects: IProject[] = [];
	return (
		<Flex flexDir="column" w="100%">
			{workspaces.map((ws, idx, arr) => (
				<VStack align="start" gap="lg" mb="lg">
					<Heading as="h4" fontSize="24px" fontWeight="extrabold">
						{ws}
					</Heading>
					<ProjectRow key={idx} projects={projects} />
					{arr[idx + 1] && <Divider />}
				</VStack>
			))}
		</Flex>
	);
};

export default WorkSpacePage;
