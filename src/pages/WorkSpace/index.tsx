import { Divider, Flex, Heading, VStack, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { projectStyle } from "./style";
import { getGradient } from "../../utils/functions/getGradient";
import { NewProjectModal } from "../../components";

const ProjectLink = ({
	projectId,
	projectTitle,
	color,
	children,
}: IProjectProps) => {
	const gradient = getGradient(color);
	return (
		<chakra.a
			as={Link}
			to={projectId}
			data-title={projectTitle}
			sx={projectStyle}
			bgGradient={`linear(to-l, ${gradient[0]}, ${gradient[1]})`}
		>
			{children}
		</chakra.a>
	);
};

const ProjectRow = ({ projects, color }: IProjectRowProps) => (
	<Flex gap="lg" wrap="nowrap">
		{projects.length > 0 ? (
			projects.map((p) => (
				<ProjectLink
					key={p.projectId}
					color={color}
					projectId={p.projectId}
					projectTitle={p.title}
				>
					{p.title}
				</ProjectLink>
			))
		) : (
			<NewProjectModal />
		)}
	</Flex>
);

const WorkSpacePage = () => {
	// mock data
	const workspaces = [
		{
			title: `درس مدیریت پروژه`,
			color: "yellow",
			projects: [
				{
					projectId: "123",
					title: "پروژه اول",
				},
			],
		},
		{
			title: `درس طراحی الگوریتم`,
			color: "red",
			projects: [
				{
					projectId: "123",
					title: "پروژه اول",
				},
				{
					projectId: "123",
					title: "پروژه دوم",
				},
			],
		},
		{
			title: `کارهای شخصیی`,
			color: "cyan",
			projects: [],
		},
		{
			title: `درس کامپایلر`,
			color: "green",
			projects: [
				{
					projectId: "123",
					title: "پروژه اول",
				},
			],
		},
	];
	return (
		<Flex flexDir="column" w="100%">
			{workspaces.map((ws, idx, arr) => (
				<VStack align="start" gap="lg" mb="lg">
					<Heading as="h4" fontSize="24px" fontWeight="extrabold">
						{ws.title}
					</Heading>
					<ProjectRow key={idx} projects={ws.projects} color={ws.color} />
					{arr[idx + 1] && <Divider />}
				</VStack>
			))}
		</Flex>
	);
};

export default WorkSpacePage;
