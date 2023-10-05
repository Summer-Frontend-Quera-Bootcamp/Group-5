import { Divider, Flex, Tag } from "@chakra-ui/react";
import {
	Avatar,
	Box,
	Card,
	CardBody,
	CardFooter,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import { DotsIcon, FlagIcon } from "../../icons";
import { CheckIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";
import moment from "jalali-moment";

interface ITaskProps {
	img?: string;
	projectName: string;
	userName: string;
	userSrc?: string;
}

const Task = ({
	img,
	projectName,
	userName,
	userSrc,
}: ITaskProps): JSX.Element => {
	const [display, setDisplay] = useState<boolean>(false);
	const [itemShow, setItemShow] = useState<boolean>(false);
	const ref: any = useRef();
	const handleBlur = () => {
		ref.current.value.trim() !== "" && setItemShow(true);
	};
	const handleMouseMove = () => {
		setDisplay(!display);
	};
	return (
		<Card
			w="249px"
			h="full"
			gap="8px"
			mt="19px"
			borderRadius="16px"
			p="8px"
			boxShadow="lg"
			onMouseEnter={handleMouseMove}
			onMouseLeave={handleMouseMove}
		>
			<CardBody>
				{img && (
					<Image src={img} borderRadius="4px" h="134px" alt="تصویر تسک" />
				)}
				<Stack spacing="5" p="4px">
					<Box h="51px" display="flex" flexDir="row">
						<Flex flexDir="column">
							{itemShow && (
								<Text fontSize="14px" color="gray.500" align="right">
									{projectName}
								</Text>
							)}
							<Box
								as="input"
								ref={ref}
								onBlur={handleBlur}
								fontSize="16px"
								fontWeight="800"
								mt="auto"
								border="1px"
								borderColor="gray.200"
								disabled={itemShow}
							></Box>
						</Flex>
						{itemShow && (
							<Avatar
								size="sm"
								name={userName}
								src={userSrc}
								ms="auto"
								mt="0px"
							/>
						)}
					</Box>
					{itemShow && (
						<Text display="flex" flexDir="row" gap="1">
							<FlagIcon color="red" w="20px" h="20px" />
							{moment().locale("fa").format("DD")}
							{moment().locale("fa").format("MMMM")} - فردا
						</Text>
					)}
					{itemShow && (
						<Flex dir="row" gap="1">
							<Tag colorScheme="telegram" borderRadius="full">
								درس
							</Tag>
							<Tag colorScheme="purple" borderRadius="full">
								پروژه
							</Tag>
						</Flex>
					)}
				</Stack>
			</CardBody>
			{display && itemShow && (
				<>
					<Divider />
					<CardFooter h="50px" mt="-10px">
						<Flex dir="row" justifyContent="space-between" w="full">
							<Box>
								<CheckIcon />
							</Box>
							<Box w="24px" h="24px">
								<DotsIcon w="20px" h="20px" />
							</Box>
						</Flex>
					</CardFooter>
				</>
			)}
		</Card>
	);
};

export default Task;
