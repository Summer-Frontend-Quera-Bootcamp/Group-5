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

interface IWorkSpaceItemProps {
	content: string;
	color: string;
	items?:any[]
}

const WorkSpaceItem = ({ content, color,items }: IWorkSpaceItemProps): JSX.Element => {

	return (
		<>
			<Accordion bg='white' borderRadius='4px' w='274px' h='36px' p='6px' top='77px' left='20px' allowToggle>
				<AccordionItem>
					<AccordionButton>
						<Stack direction='row' h='28px' w='128px' spacing='8px' justifyItems={'center'} alignItems={'center'}>
							<Box bg={color} p='2px' w='20px' h='20px' borderRadius='4px'></Box>
							<Text w='100px' mt='5px' h='28px' fontSize='16px' color='black' fontWeight='500' align='right'>{content}</Text>
						</Stack >
						{/*todo dots-component replaced bottom box element*/}
						<Box as="button" w='20px' h='20px' ms='auto'>
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.4191 10C15.4191 10.2302 15.2325 10.4168 15.0023 10.4168C14.7721 10.4168 14.5854 10.2302 14.5854 10C14.5854 9.76979 14.7721 9.58316 15.0023 9.58316C15.2325 9.58316 15.4191 9.76979 15.4191 10" stroke="#323232" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M10.4172 10C10.4172 10.2302 10.2306 10.4168 10.0003 10.4168C9.77012 10.4168 9.5835 10.2302 9.5835 10C9.5835 9.76979 9.77012 9.58316 10.0003 9.58316C10.2306 9.58316 10.4172 9.76979 10.4172 10" stroke="#323232" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M5.41474 10C5.41474 10.2302 5.22811 10.4168 4.99789 10.4168C4.76768 10.4168 4.58105 10.2302 4.58105 10C4.58105 9.76979 4.76768 9.58316 4.99789 9.58316C5.22811 9.58316 5.41474 9.76979 5.41474 10" stroke="#323232" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						</Box>
					</AccordionButton>
					<AccordionPanel textAlign={"right"}>
							{/*todo The below button should replace with button-component*/}
						{!items?<Button colorScheme='teal' variant='outline' h='36px' w='274px' border='2px' borderRadius='7px' p='4px' gap='8px'>ساختن پروژه جدید</Button>
										:items.map(x=>x)}
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
};

export default WorkSpaceItem;
