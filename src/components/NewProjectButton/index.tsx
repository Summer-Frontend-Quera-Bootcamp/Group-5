import { Box, Button, useColorMode } from "@chakra-ui/react";
import { getGradient } from "../../utils/functions/getGradient";
import { AddSquareIcon } from "../../icons";
import { newProjectButtonStyle, newProjectButtonWrapperStyle } from "./style";
import { FC } from "react";

interface IButtonProps {
	color: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NewProjectButton: FC<IButtonProps> = ({ color, onClick }) => {
	const { colorMode } = useColorMode();
	const gradient = getGradient(color);
	return (
		<Box
			sx={newProjectButtonWrapperStyle}
			bgGradient={`linear(to-l, ${gradient[0]}, ${gradient[1]})`}
		>
			<Button
				sx={newProjectButtonStyle}
				bg={colorMode === "dark" ? "#1A202C" : "white"}
				_hover={{ bg: colorMode === "dark" ? "#1A202C" : "white" }}
				color={color + "-primary"}
				leftIcon={<AddSquareIcon w="24px" h="24px" />}
				onClick={onClick}
			>
				ساختن پروژه جدید
			</Button>
		</Box>
	);
};

export default NewProjectButton;
