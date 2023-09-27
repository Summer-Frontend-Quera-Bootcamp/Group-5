import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	VStack,
	chakra,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { theme } from "../../theme";
import {
	newProjectButtonStyle,
	newProjectButtonWrapperStyle,
	projectStyle,
} from "./style";
import { PlusSquareIcon } from "@chakra-ui/icons";

function getGradient(color: string): string[] {
	const themeColors = theme.colors as Record<string, string>;
	return [`${color}-primary`, themeColors[`${color}-primary`] + "77"];
}

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

const NewProjectButton = ({ color }: { color: string }) => {
	const gradient = getGradient(color);
	return (
		<Box
			sx={newProjectButtonWrapperStyle}
			bgGradient={`linear(to-l, ${gradient[0]}, ${gradient[1]})`}
		>
			<Button
				sx={newProjectButtonStyle}
				color={color + "-primary"}
				leftIcon={<PlusSquareIcon boxSize={"24px"} />}
			>
				ساختن پروژه جدید
			</Button>
		</Box>
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
			<NewProjectButton color={color} />
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
