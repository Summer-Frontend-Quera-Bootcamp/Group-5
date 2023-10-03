import React, { ReactNode, MouseEvent } from "react";
import { Button as ChakraButton, Flex } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";

interface ButtonProps {
	isActive: boolean;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	children: ReactNode;
	icon?: any;
	fullWidth?: boolean;
	type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
	isActive,
	onClick,
	children,
	icon: IconComponent,
	fullWidth = false,
	type = "button",
	...restProps
}) => {
	return (
		<Flex
			direction="row"
			justifyContent="center"
			alignItems="center"
			width={fullWidth ? "100%" : undefined}
		>
			<ChakraButton
				type={type}
				colorScheme="teal"
				size="md"
				_hover={{
					background: "#006c6c",
					color: "white",
				}}
				margin="auto"
				onClick={onClick}
				disabled={!isActive}
				{...restProps}
				width={fullWidth ? "100%" : undefined}
				leftIcon={IconComponent && <Icon as={IconComponent} />}
			>
				{children}
			</ChakraButton>
		</Flex>
	);
};

export default Button;
