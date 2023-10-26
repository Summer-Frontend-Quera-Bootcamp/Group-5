import { Box, Text, Tooltip } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import DotsMenu from "./DotsMenu";
import { Task } from "../../..";
import NewTaskModal from "../../../NewTaskModal";
import { useParams } from "react-router-dom";
import { getAllTasks, getProject } from "../../../../services/api";
import { useEffect } from "react";

interface IColumnProps {
	text: string;
	color: string;
	boardId: number;
	onDelete: Dispatch<SetStateAction<any[]>>;
}

const Column = ({
	text,
	color,
	boardId,
	onDelete,
}: IColumnProps): JSX.Element => {
	const [display, setDisplay] = useState<boolean>(false);
	const [activeProject, setActiveProject] = useState<any>();
	const [array, setArray] = useState<any[]>([]);
	const { workspaceId, projectId } = useParams();
	useEffect(() => {
		getProject(+workspaceId!, +projectId!).then((res: any) => {
			setActiveProject(res.data);
		});
		getAllTasks(+workspaceId!, +projectId!, boardId).then((res: any) => {
			setArray(res.data);
		});
	}, []);

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
					<DotsMenu
						boardId={boardId}
						project={activeProject?.name}
						onDelete={onDelete}
					/>
					<Tooltip hasArrow label="افزودن تسک" placement="top" ml={1}>
						<NewTaskModal
							place="board"
							project={activeProject?.name}
							boardId={boardId}
							handleChange={setArray}
						/>
					</Tooltip>
				</Box>
			</Box>
			{array?.map((x) => (
				<Task
					projectName={activeProject?.name}
					members={x.members}
					userSrc={x.thumbnail}
					img={x.attachment}
					taskName={x.name}
					deadline={x.deadline}
					priority={x.priority}
				/>
			))}
		</Box>
	);
};

export default Column;
