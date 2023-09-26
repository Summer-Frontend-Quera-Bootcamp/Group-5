import {  
	Heading,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon, 
	Text,
	Button,
	Box,
} from "@chakra-ui/react";
import { SmallAddIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import {headingStyle} from "../../layouts/Authentication/style";
import { WorkSpaceItem } from "..";

interface ISidebarProp{
	items?:any[]
}
const Sidebar = ({items}:ISidebarProp):JSX.Element => {
	return (
	<>
		<Heading sx={headingStyle}>کوئرا تسک منیجر</Heading>
		<Box w='274px' top='122px' left='16px' gap='lg'>
			<Accordion w='274px' h='28px' allowToggle>
  				<AccordionItem>
      				<AccordionButton>
        				<Text w='98px' h='28px' flex='1' align='right' fontWeight='800' fontSize='16px' lineHeight='27.64px'>
          					ورک اسپیس ها
        				</Text>
	        		<AccordionIcon />
    	  	</AccordionButton>
    		<AccordionPanel pb={4}>
			<Button leftIcon={<IconButton size='5px'  variant='outline' colorScheme='black' icon={<SmallAddIcon/>} aria-label="space btn"/>} colorScheme='gray' w='255px' h='32px' borderRadius='6px' p='10px' gap='4px' variant='solid'>
   				<Text mr='-6px' w='110px' h='21px' fontWeight='400px' lineHeight='20.73px' fontSize='12px'>ساختن اسپیس جدید</Text>
			</Button>
      			{items && items.map(x=>x)}
				<WorkSpaceItem color="pink" content="amin" />
    		</AccordionPanel>
  			</AccordionItem>
			</Accordion>
		</Box>
	</>
	)
};

export default Sidebar;
