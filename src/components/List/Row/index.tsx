import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex,
	HStack,
	Text,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllTasks } from "../../../services/api";
import TaskRow from "./TaskRow";
import { RowBoxStyle } from "../style";

const Row: FC<IRowProps> = ({ id, name, color }) => {
	const [tasks, setTasks] = useState<any[]>([]);
	const { workspaceId, projectId } = useParams();
	useEffect(() => {
		getAllTasks(+workspaceId!, +projectId!, id).then((res: any) => {
			setTasks(res.data);
		});
	}, []);
	const columns = ["اعضا", "ددلاین", "اولویت", "توضیحات"];
	return (
		<Accordion allowMultiple>
			<AccordionItem border="0">
				<AccordionButton>
					<HStack flexBasis="50%">
						<AccordionIcon />
						<Box sx={RowBoxStyle} bg={color}>
							<Text fontSize="18px" color="white">
								{name}
							</Text>
						</Box>
						<Text>{tasks.length} تسک</Text>
					</HStack>
					<Flex gap="130px" ms="auto">
						{columns.map((item, idx) => (
							<Box key={idx}>{item}</Box>
						))}
					</Flex>
				</AccordionButton>
				<AccordionPanel pb={4}>
					{tasks?.map((item, idx) => (
						<TaskRow key={idx} {...item} color={color} />
					))}
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};

export default Row;
