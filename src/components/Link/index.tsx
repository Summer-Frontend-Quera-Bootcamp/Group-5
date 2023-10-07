import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useAppSelector } from "../../hooks";

interface LinkProps {
	href: string;
	children: React.ReactNode;
	color?: string;
	fontSize?: string;
}

const Link: React.FC<LinkProps> = ({ href, children, fontSize }) => {
	const { accent, highlight } = useAppSelector((state) => state.theme);
	const linkStyles = {
		textDecoration: "none",
		fontWeight: "bold",
		fontSize: fontSize || "inherit", // Use the provided fontSize or default to 'inherit'
	};

	return (
		<ChakraLink
			as={RouterLink}
			to={href}
			color={highlight}
			colorScheme={accent}
			sx={linkStyles}
		>
			{children}
		</ChakraLink>
	);
};

export default Link;
