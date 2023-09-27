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
	Stack,
	Avatar,
	Spacer,
	Flex,
	Switch,
} from "@chakra-ui/react";
import { SmallAddIcon,ArrowForwardIcon} from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import {headingStyle} from "../../layouts/Authentication/style";

interface ISidebarProp{
	items?:any[];
	name:string;
	src?:string
}
const Sidebar = ({items,name,src}:ISidebarProp):JSX.Element => {
	return (
	<>
		<Heading sx={headingStyle}>کوئرا تسک منیجر</Heading>

		<Box w='274px' top='122px' h='430px' left='16px' gap='8px'>
			<Accordion w='274px' allowToggle>
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
    		</AccordionPanel>
  			</AccordionItem>
			</Accordion>
		</Box>

		<Box top='903px' m='0 32px' w='276px' h='89px' gap='4px'>
			<Stack direction='row' h='37px' w='144px' spacing='4px'>
				<Avatar size='sm' name={name} src={src} />
				<Text pt='4px' w='100px' h='28px' fontSize='16px' color='black' fontWeight='500px' align='right' lineHeight='27.64px'>{name}</Text>
			</Stack >
			<Box p='0 xs'>
				<Flex>
					<Button leftIcon={<ArrowForwardIcon />} w='64px' h='28px' gap='4px' borderColor='white' color='#818181' colorScheme='teal' variant='outline'>
    					خروج
  					</Button>
				<Spacer/>
  					<Switch w='64px' h='36px' mt='3px' isInvalid/>
				</Flex>
			</Box>
		</Box>
	</>
	)
};

export default Sidebar;
