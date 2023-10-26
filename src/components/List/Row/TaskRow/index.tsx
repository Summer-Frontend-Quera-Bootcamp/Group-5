import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react";
import moment from "jalali-moment";
import { FC, useMemo } from "react";
import { useAppSelector } from "../../../../hooks";
import { FlagIcon, JustifyRightIcon } from "../../../../icons";
import { taskRowBoxStyle } from "../../style";

const TaskRow: FC<ITaskRowProps> = ({ name, deadline, priority, color }) => {
	const { username, thumbnail } = useAppSelector((state) => state.user);
	const flagColor = useMemo(() => {
		switch (priority) {
			case 1:
				return "red.500";
			case 2:
				return "yellow.400";
			case 3:
				return "cyan.500";
			case 4:
			default:
				return "gray.400";
		}
	}, [priority]);
	return (
		<Box my="19px">
			<Flex align="center">
				<HStack flexBasis="50%" ps="24px">
					<Box sx={taskRowBoxStyle} bg={color} />
					<Text fontSize="18px">{name}</Text>
				</HStack>
				<Flex gap="150px" ms="auto">
					<Avatar size="sm" name={username} src={thumbnail} />
					<Text display="flex" flexDir="row" gap="1" ms="-20px">
						{moment(deadline).locale("fa").format("DD")}
						{moment(deadline).locale("fa").format("MMMM")}
					</Text>
					<FlagIcon color={flagColor} w="20px" h="20px" ms="-10px" />
					<JustifyRightIcon w="20px" h="20px" ms="20px" me="20px" />
				</Flex>
			</Flex>
		</Box>
	);
};

export default TaskRow;
