import { Box, Flex,Spacer, Text  } from "@chakra-ui/react";

interface IProjectItemProp{
	content:string;
}
const ProjectItem = ({content}:IProjectItemProp):JSX.Element => {
	return (
		<>
		<Box 
		bg='#FAFAFA' 
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
				<Text w='65px' h='28px' fontSize='16px' color='black' fontWeight='500' align='right' lineHeight='27.64px'>{content}</Text>
  			<Spacer />
  				{/* here should be an essensial/dots-menu component */}
			</Flex>
		</Box>
		</>
	);
};


export default ProjectItem;
