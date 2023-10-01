import {
	Box,
	Stack,
	Text,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	Button
} from "@chakra-ui/react";
import  DotsIcon  from "../assets/Dots"

interface IWorkSpaceItemProps {
	content: string;
	color: string;
	items?: any[]
}

const WorkSpaceItem = ({ content, color, items }: IWorkSpaceItemProps): JSX.Element => {

	return (
		<>
			<Accordion bg='FAFAFA' borderRadius='4px' p='6px' allowToggle>
				<AccordionItem>
					<AccordionButton>
						<Stack direction='row' spacing='8px' p='4px' alignItems={'center'}>
							<Box bg={color} w='20px' h='20px' borderRadius='4px'></Box>
							<Text fontSize='16px' fontWeight='500' align='right'>{content}</Text>
						</Stack >
						{/*todo dots-component replaced bottom box element*/}
						<Box as="button" w='24px' h='24px' ms='auto'>
							<DotsIcon w='20px' h='20px'/>
						</Box>
					</AccordionButton>
					<AccordionPanel textAlign={"right"}>
						{/*todo The below button should replace with button-component*/}
						{!items ? <Button colorScheme='teal' variant='outline' w='full' border='2px' borderRadius='7px' p='4px' gap='8px'>ساختن پروژه جدید</Button>
							: items.map(x => x)}

					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
};

export default WorkSpaceItem;
