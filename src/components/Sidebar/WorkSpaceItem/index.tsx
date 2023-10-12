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
import { key } from "localforage";
import { useEffect, useState } from "react";
import { AXIOS } from "../../../utils/functions/AXIOS";
import ProjectItem from "../ProjectItem";

interface IWorkSpaceItemProps {
	content: string;
	color: string;
	key: any;
}

const WorkSpaceItem = ({
	content,
	color,
}: IWorkSpaceItemProps): JSX.Element => {
	const { accent } = useAppSelector((state) => state.theme);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [projects, setProjects] = useState<any[]>();
	useEffect(() => {
		AXIOS.get(`/workspaces/0/projects/`)
			.then((res) => {
				setProjects(res.data);
				console.log(res.data);
			})
			.catch((err) => console.log(err.message));
	}, []);

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
							<ColumnMore type="workspace" />
						</Box>
					</AccordionButton>
					<AccordionPanel textAlign={"right"}>
						{!projects ? (
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
								<ModalItem isOpen={isOpen} onClose={onClose} key={key} />
							</>
						) : (
							projects.map((x) => (
								<ProjectItem content={x.name} key={x.id} path="1" />
							))
						)}
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
};

export default WorkSpaceItem;
