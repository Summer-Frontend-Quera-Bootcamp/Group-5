import { Box, Flex,Spacer} from "@chakra-ui/react";
import { NavLink as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink} from '@chakra-ui/react'

interface IProjectItemProp{
	content:string;
	path:string;
}
const ProjectItem = ({content,path}:IProjectItemProp):JSX.Element => {
	return (
		<>
		<Box 
		bg='FAFAFA' 
		borderRadius='4px' 
		w='246px' 
		h='36px' 
		p='4px 6px 4px 6px' 
		top='72px' 
		left='26px' 
		_selected={{
			backgroundColor:'#E9F9FF',
			top:'124px',
			left:'32px',
			gap:'8px'
			}}>
			<Flex>
				<ChakraLink as={ReactRouterLink} to={path} w='65px' h='28px' fontSize='16px' color='black' fontWeight='500' lineHeight='27.64px' mr='25px'>{content}</ChakraLink>
  			<Spacer />
			  <Box as="button" w='20px' h='20px' ml='10px'>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15.4191 10C15.4191 10.2302 15.2325 10.4168 15.0023 10.4168C14.7721 10.4168 14.5854 10.2302 14.5854 10C14.5854 9.76979 14.7721 9.58316 15.0023 9.58316C15.2325 9.58316 15.4191 9.76979 15.4191 10" stroke="#323232" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M10.4172 10C10.4172 10.2302 10.2306 10.4168 10.0003 10.4168C9.77012 10.4168 9.5835 10.2302 9.5835 10C9.5835 9.76979 9.77012 9.58316 10.0003 9.58316C10.2306 9.58316 10.4172 9.76979 10.4172 10" stroke="#323232" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M5.41474 10C5.41474 10.2302 5.22811 10.4168 4.99789 10.4168C4.76768 10.4168 4.58105 10.2302 4.58105 10C4.58105 9.76979 4.76768 9.58316 4.99789 9.58316C5.22811 9.58316 5.41474 9.76979 5.41474 10" stroke="#323232" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</Box>
			</Flex>
		</Box>
		</>
	);
};


export default ProjectItem;
