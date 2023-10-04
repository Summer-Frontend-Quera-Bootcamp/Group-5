import { chakra } from "@chakra-ui/react";
import { FC } from "react";

const ColorInput: FC<TColorInputProps> = ({
	color,
	selectedColor,
	setSelectedColor,
}) => {
	return (
		<chakra.label
			bg={color}
			w={color === selectedColor ? "28px" : "20px"}
			h={color === selectedColor ? "28px" : "20px"}
			borderRadius={color === selectedColor ? "12px" : "8px"}
			display="inline-flex"
			alignItems="center"
			justifyContent="center"
			cursor="pointer"
		>
			<chakra.input
				type="radio"
				name="theme-color"
				value={color}
				checked={color === selectedColor}
				onChange={() => setSelectedColor(color)}
				hidden
			/>
			<chakra.span
				display={color === selectedColor ? "inline-block" : "none"}
				w="12px"
				h="12px"
				bg="white"
				borderRadius="full"
			></chakra.span>
		</chakra.label>
	);
};

export default ColorInput;
