import { Box, Text, Tooltip } from "@chakra-ui/react";
import { useState } from "react";
import DotsMenu from "./DotsMenu";
import { Task } from "..";
import NewTaskModal from "../NewTaskModal";
import { useParams } from "react-router-dom";
import { getAllTasks, getProject } from "../../services/api";
import { useEffect } from "react";

interface IColumnProps {
	text: string;
	color: string;
	boardId: number;
}

const Column = ({ text, color, boardId }: IColumnProps): JSX.Element => {
	const [display, setDisplay] = useState<boolean>(false);
	const [activeProject, setActiveProject] = useState<any>();
	const [array, setArray] = useState<any[]>([]);
	const { workspaceId, projectId } = useParams();
	const colors: TColorSchemes[] = [
		"red",
		"orange",
		"yellow",
		"green",
		"teal",
		"blue",
		"cyan",
		"purple",
		"pink",
	];
	useEffect(() => {
		getProject(workspaceId, projectId).then((res: any) => {
			setActiveProject(res.data);
		});
		getAllTasks(workspaceId, projectId, boardId).then((res: any) =>
			setArray(res.data)
		);
	}, [array]);

	const handleMouseEnter = () => {
		setDisplay(true);
	};
	const handleMouseLeave = () => {
		setDisplay(false);
	};

	return (
		<Box display="flex" flexDir="column" h="max-content">
			<Box
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				display="flex"
				flexDir="row"
				justifyContent="space-between"
				w="250PX"
				h="44px"
				borderRadius="16px"
				borderTop="2px"
				p="8px 12px"
				borderTopColor={color}
				bg="whiteAlpha.100"
				boxShadow="lg"
			>
				<Text
					fontWeight="500"
					align="right"
					lineHeight="28px"
					display="flex"
					flex="row"
					gap="4px"
				>
					{text}
					<Box
						borderRadius="100px"
						p="2px 4px 0px 4px"
						gap="10px"
						bg="#F4F4F4"
						display="flex"
						justifyContent="center"
						alignItems="center"
						color="blackAlpha.900"
					>
						۰
					</Box>
				</Text>
				<Box w="48px" h="24px" gap="4px" display={display ? "flex" : "none"}>
					<DotsMenu boardId={boardId} />
					<Tooltip hasArrow label="افزودن تسک" placement="top" ml={1}>
						<NewTaskModal place="board" project={activeProject?.name} />
					</Tooltip>
				</Box>
			</Box>
			{array?.map((x) => (
				<Task
					projectName={activeProject.name}
					userName={x.members}
					userSrc={x.thumbnail}
					img={x.attachment}
					taskName={x.name}
					deadline={x.deadline}
				/>
			))}
		</Box>
	);
};

export default Column;
