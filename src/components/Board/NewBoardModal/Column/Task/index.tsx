import {
	Avatar,
	Box,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Flex,
	Image,
	Stack,
	Tag,
	Text,
} from "@chakra-ui/react";
import moment from "jalali-moment";
import { useState } from "react";
import { useAppSelector } from "../../../../../hooks";
import { CheckmarkCircleIcon, DotsIcon, FlagIcon } from "../../../../../icons";

interface ITaskProps {
	img: string;
	projectName: string;
	members: string;
	userSrc: string;
	taskName: string;
	deadline: string;
	priority: number;
}

const Task = ({
	img,
	projectName,
	members,
	userSrc,
	taskName,
	deadline,
	priority,
}: ITaskProps): JSX.Element => {
	const [display, setDisplay] = useState<boolean>(false);
	const { username } = useAppSelector((state) => state.user);
	let flagColor = "";
	switch (priority) {
		case 1:
			flagColor = "red.500";
			break;
		case 2:
			flagColor = "yellow.400";
			break;
		case 3:
			flagColor = "cyan.500";
			break;
		case 4:
			flagColor = "gray.400";
			break;
	}
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

							<Text fontSize="16px" fontWeight="800" mt="auto">
								{taskName}
							</Text>
						</Flex>
						<Avatar size="sm" name={username} src={userSrc} />
					</Box>

					<Text display="flex" flexDir="row" gap="1">
						<FlagIcon color={flagColor} w="20px" h="20px" />
						{moment(deadline).locale("fa").format("DD")}
						{moment(deadline).locale("fa").format("MMMM")}
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
