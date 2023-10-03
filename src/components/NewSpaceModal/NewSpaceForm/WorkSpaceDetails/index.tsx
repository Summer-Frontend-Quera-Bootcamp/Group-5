import {
	Avatar,
	Box,
	Button,
	HStack,
	Heading,
	Text,
	VStack,
} from "@chakra-ui/react";
import { FC, FormEvent } from "react";
import { ArrowIcon } from "../../../../icons";
import { chakra } from "@chakra-ui/react";

const WorkSpaceDetails: FC<IWorkSpaceDetailsProps> = ({
	workspaceName,
	workspaceColor,
	workspaceOwner,
	setModalPage,
}) => {
	return (
		<chakra.form
			display="flex"
			flexDir="column"
			gap="xl"
			pos="relative"
		>
			<Button
				type="button"
				variant="unstyled"
				p="0"
				w="24px"
				h="24px"
				pos="absolute"
				top="-10px"
				left="-30px"
				onClick={() => setModalPage("workspaceColor")}
			>
				<ArrowIcon w="24px" h="24px" />
			</Button>
			<Heading textAlign="center" fontWeight="800" fontSize="24px">
				مرور اطلاعات
			</Heading>
			<VStack
				p="16px 12px"
				gap="16px"
				border="1px"
				borderColor="gray.300"
				borderRadius="8px"
				align="stretch"
				fontWeight="800"
			>
				<HStack justify="space-between">
					<Text>نام ورک‌اسپیس</Text>
					<Text>{workspaceName}</Text>
				</HStack>
				<HStack justify="space-between">
					<Text>رنگ ورک‌اسپیس</Text>
					<Box w="20px" h="20px" borderRadius="4px" bg={workspaceColor}></Box>
				</HStack>
				<HStack justify="space-between">
					<Text>اعضا</Text>
					<Avatar
						size="sm"
						name={workspaceOwner.name}
						src={workspaceOwner.img}
					/>
				</HStack>
			</VStack>
			<Button
				colorScheme="teal"
				type="submit"
			>
				ادامه
			</Button>
		</chakra.form>
	);
};

export default WorkSpaceDetails;
