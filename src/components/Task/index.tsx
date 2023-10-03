import { Divider, Flex, Tag } from '@chakra-ui/react'
import { Avatar, Box, Card, CardBody, CardFooter, Image, Stack, Text } from '@chakra-ui/react'
import { DotsIcon, FlagIcon } from '../../icons';
import { CheckIcon } from '@chakra-ui/icons';
import { useState } from 'react';

interface ITaskProps {
	img?: string;
	projectName: string;
	userName: string;
	userSrc?: string;
}

const Task = ({ img, projectName, userName, userSrc }: ITaskProps): JSX.Element => {
	const [display, setDisplay] = useState<boolean>(false);
	const handleMouseMove = () => {
		setDisplay(!display);
	};
	return (
		<Card
			w='249px'
			h='full'
			gap='8px'
			mt='19px'
			borderRadius='16px'
			p='8px'
			boxShadow="lg"
			onMouseEnter={handleMouseMove}
			onMouseLeave={handleMouseMove}
		>
			<CardBody>
				{img &&
					<Image
						src={img}
						borderRadius='4px'
						h='134px'
						alt='تصویر تسک'
					/>}
				<Stack spacing='5' p='4px'>
					<Box h='51px' display='flex' flexDir='row'>
						<Flex flexDir='column'>
							<Text fontSize='14px' color='gray.500' align='right'>{projectName}</Text>
							<Box as='text' fontSize='16px' fontWeight='800' mt='auto'>این تیتر تسک است</Box>
						</Flex>
						<Avatar size="sm" name={userName} src={userSrc} ms='auto' mt='0px' />
					</Box>
					<Text display='flex' flexDir='row' gap='1'>
						<FlagIcon color='red' w='20px' h='20px' />
						{new Date().getDate()}-{new Date().getMonth()}
					</Text>
					<Flex dir='row' gap='1'>
						<Tag colorScheme='telegram' borderRadius='full'>درس</Tag>
						<Tag colorScheme='purple' borderRadius='full'>پروژه</Tag>
					</Flex>
				</Stack>
			</CardBody>
			{display &&
				<>
					<Divider />
					<CardFooter h='50px' mt='-10px'>
						<Flex dir='row' justifyContent='space-between' w='full'>
							<Box >
								<CheckIcon />
							</Box>
							<Box w='24px' h='24px'>
								<DotsIcon w='20px' h='20px' />
							</Box>
						</Flex>
					</CardFooter>
				</>
			}
		</Card>
	);
};

export default Task;
