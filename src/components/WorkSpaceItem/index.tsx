import { Box, Flex,Spacer,Stack, Text  } from "@chakra-ui/react";

interface IWorkSpaceItemProps{
	content:string;
	color:string;
}

const WorkSpaceItem = ({content,color}:IWorkSpaceItemProps):JSX.Element => {

	return (
		<>
		<Box bg='grey' borderRadius='4px' w='274px' h='36px' p='6px' top='77px' left='20px'>
			<Flex>
  				<Stack direction='row' h='28px' w='128px' spacing='4px'>
				  	<Box bg={color} w='20px' h='20px' borderRadius='4px'></Box>
					<Text w='100px' h='28px' fontSize='16px' color='black' fontWeight='500' align='right'>{content}</Text>
  				</Stack >
  			<Spacer />
  				{/* here should be an essensial/dots-menu component */}
			</Flex>
		</Box>
		</>
	);
};

export default WorkSpaceItem;
