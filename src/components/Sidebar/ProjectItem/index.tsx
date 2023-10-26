import { Box, Flex, Spacer } from "@chakra-ui/react";
import { NavLink as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import ColumnMore from "../Columnmore";
import { useState } from "react";
import { useAppSelector } from "../../../hooks";

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
	const { highlight } = useAppSelector((state) => state.theme);
	return (
		<Flex borderRadius="4px" w="full">
			<ChakraLink
				as={ReactRouterLink}
				to={`workspaces/${workSpaceKey}/projects/${projectKey}`}
				lineHeight="27.64px"
				ms="25px"
				me="5px"
				flexGrow="1"
				_activeLink={{ color: highlight }}
			>
				{content}
			</ChakraLink>
			<Box as="button" ml="10px" w="24px" h="24px">
				<ColumnMore
					type="projectitem"
					workSpaseKey={workSpaceKey}
					projectKey={projectKey}
				/>
			</Box>
		</Flex>
	);
};

export default ProjectItem;
