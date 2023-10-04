import { Box, Flex, Spacer } from "@chakra-ui/react";
import { NavLink as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import ColumnMore from "../Columnmore";

interface IProjectItemProp {
	content: string;
	path: string;
}
const ProjectItem = ({ content, path }: IProjectItemProp): JSX.Element => {
	return (
		<>
			<Box
				bg="FAFAFA"
				borderRadius="4px"
				w="246px"
				p="4px 6px"
				_selected={{
					backgroundColor: "#E9F9FF",
					top: "124px",
					left: "32px",
					gap: "8px",
				}}
			>
				<Flex>
					<ChakraLink
						as={ReactRouterLink}
						to={path}
						lineHeight="27.64px"
						mr="25px"
					>
						{content}
					</ChakraLink>
					<Spacer />
					<Box as="button" ml="10px" w="24px" h="24px">
						<ColumnMore type="projectitem" />
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default ProjectItem;
