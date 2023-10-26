import {
	Box,
	Stack,
	Text,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	Button,
	useDisclosure,
} from "@chakra-ui/react";
import ColumnMore from "../Columnmore";
import { useAppSelector } from "../../../hooks";
import ModalItem from "../../NewProjectModal/modalItem";
import ProjectItem from "../ProjectItem";

interface IWorkSpaceItemProps {
	content: string;
	color: string;
	workSpaceKey?: any;
}

const WorkSpaceItem = ({
	content,
	color,
	workSpaceKey,
}: IWorkSpaceItemProps): JSX.Element => {
	const { accent } = useAppSelector((state) => state.theme);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const allProjects = useAppSelector((state) => state.projects);
	const projects = allProjects.find(
		(item) => item.workspaceId === workSpaceKey
	)!;

	return (
		<>
			<Accordion bg="FAFAFA" borderRadius="4px" p="6px" allowToggle>
				<AccordionItem>
					<AccordionButton>
						<Stack direction="row" spacing="8px" p="4px" alignItems={"center"}>
							<Box bg={color} w="20px" h="20px" borderRadius="4px"></Box>
							<Text fontSize="16px" fontWeight="500" align="right">
								{content}
							</Text>
						</Stack>
						<Box as="button" w="24px" h="24px" ms="auto">
							<ColumnMore type="workspace" workSpaseKey={workSpaceKey} />
						</Box>
					</AccordionButton>
					<AccordionPanel p="4px 24px 8px 6px" textAlign={"right"}>
						{projects?.projectsList?.length === 0 ? (
							<>
								<Button
									colorScheme={accent}
									variant="outline"
									w="full"
									border="2px"
									borderRadius="7px"
									p="4px"
									gap="8px"
									onClick={onOpen}
								>
									ساختن پروژه جدید
								</Button>
								<ModalItem
									isOpen={isOpen}
									onClose={onClose}
									workSpacekey={workSpaceKey}
								/>
							</>
						) : (
							projects?.projectsList.map((x) => (
								<ProjectItem
									content={x.name}
									projectKey={x.id}
									workSpaceKey={workSpaceKey}
								/>
							))
						)}
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
};

export default WorkSpaceItem;
