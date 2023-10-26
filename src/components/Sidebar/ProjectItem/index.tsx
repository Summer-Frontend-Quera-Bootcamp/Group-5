import { Box, Flex, Spacer } from "@chakra-ui/react";
import { NavLink as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import ColumnMore from "../Columnmore";
import { useState } from "react";

interface IProjectItemProp {
	content: string;
	projectKey: any;
	workSpaceKey: any;
}
const ProjectItem = ({
	content,
	projectKey,
	workSpaceKey,
}: IProjectItemProp): JSX.Element => {
	const [focus, setFocus] = useState(false);
	const handleFocus = () => {
		setFocus(true);
	};
	const handleBlur = () => {
		setFocus(false);
	};

	return (
		<>
			<Box
				bg={focus ? "teal.50" : "FAFAFA"}
				borderRadius="4px"
				w="246px"
				p="4px 6px"
				color={focus ? "black" : "white"}
				onFocus={handleFocus}
				onBlur={handleBlur}
			>
				<Flex>
					<ChakraLink
						as={ReactRouterLink}
						to={`workspaces/${workSpaceKey}/projects/${projectKey}`}
						lineHeight="27.64px"
						mr="25px"
					>
						{content}
					</ChakraLink>
					<Spacer />
					<Box as="button" ml="10px" w="24px" h="24px">
						<ColumnMore
							type="projectitem"
							workSpaseKey={workSpaceKey}
							projectKey={projectKey}
						/>
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default ProjectItem;
