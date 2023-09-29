import { Avatar, Badge, Button, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";

const WorkSpaceOwner: FC = () => {
	return (
		<HStack>
			<Avatar
				size="md"
				name="Kola Tioluwani"
				src="https://bit.ly/tioluwani-kolawole"
			/>
			<Text>من</Text>
			<Badge
				variant="subtle"
				bg="blue-secondary"
				color="blue-primary"
				fontWeight="400"
				fontSize="14px"
				p="4px 8px"
				borderRadius="6px"
				textTransform="capitalize"
			>
				workspace owner
			</Badge>
			<Button
				variant="outline"
				fontSize="12px"
				fontWeight="400"
				ms="auto"
				borderColor="gray.500"
				color="gray.500"
				cursor="default"
			>
				دسترسی کامل
			</Button>
		</HStack>
	);
};

export default WorkSpaceOwner;
