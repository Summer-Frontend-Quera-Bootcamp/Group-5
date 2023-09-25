import {
	Box,
	Stack,
	Text,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
} from "@chakra-ui/react";

interface IWorkSpaceItemProps {
	content: string;
	color: string;
}

const WorkSpaceItem = ({ content, color }: IWorkSpaceItemProps): JSX.Element => {

	return (
		<>
			<Accordion bg='white' borderRadius='4px' w='274px' h='36px' p='6px' top='77px' left='20px' allowToggle>
				<AccordionItem>
					<AccordionButton>
						<Stack direction='row' h='28px' w='128px' spacing='4px' flex='1'>
							<Box bg={color} w='20px' h='20px' borderRadius='4px'></Box>
							<Text w='100px' h='28px' fontSize='16px' color='black' fontWeight='500' align='left'>{content}</Text>
						</Stack >
						<Box as="button" w='20px' h='20px'>...</Box>
					</AccordionButton>
					<AccordionPanel>
						todo ProjectItem
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
};

export default WorkSpaceItem;
