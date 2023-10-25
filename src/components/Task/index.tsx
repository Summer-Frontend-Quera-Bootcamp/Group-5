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
import { CheckmarkCircleIcon, DotsIcon, FlagIcon } from "../../icons";
import { useState } from "react";
import moment from "jalali-moment";

interface ITaskProps {
	img: string;
	projectName: string;
	userName: string;
	userSrc: string;
	taskName: string;
	deadline: string;
}

const Task = ({
	img,
	projectName,
	userName,
	userSrc,
	taskName,
	deadline,
}: ITaskProps): JSX.Element => {
	const [display, setDisplay] = useState<boolean>(false);
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
			boxShadow="lg"
			onMouseEnter={handleMouseMove}
			onMouseLeave={handleMouseMove}
		>
			<CardBody>
				{img && (
					<Image src={img} borderRadius="4px" h="134px" alt="تصویر تسک" />
				)}
				<Stack spacing="5">
					<Box h="51px" display="flex" justifyContent="space-between">
						<Flex flexDir="column">
							<Text fontSize="14px" color="gray.500" align="right">
								{projectName}
							</Text>

							<Text
								fontSize="16px"
								fontWeight="800"
								mt="auto"
							>
								{taskName}
							</Text>
						</Flex>
						<Avatar size="sm" name={`userName`} src={userSrc} />
					</Box>

					<Text display="flex" flexDir="row" gap="1">
						<FlagIcon color="red" w="20px" h="20px" />
						{moment().locale("fa").format("DD")}
						{moment().locale("fa").format("MMMM")} - فردا
					</Text>

					<Flex dir="row" gap="1">
						<Tag colorScheme="telegram" borderRadius="full">
							درس
						</Tag>
						<Tag colorScheme="purple" borderRadius="full">
							پروژه
						</Tag>
					</Flex>
				</Stack>
			</CardBody>
			{display && (
				<>
					<Divider />
					<CardFooter h="50px" mt="-10px">
						<Flex dir="row" justifyContent="space-between" w="full">
							<Box>
								<CheckmarkCircleIcon w="20px" h="20px" />
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
