import { Box, Text, Tooltip } from "@chakra-ui/react";
import { AddIcon } from "../../icons";
import { useState } from "react";
import DotsMenu from "./DotsMenu";

interface IColumnProps {
	text: string;
	color: string;
}

const Column = ({ text, color }: IColumnProps): JSX.Element => {
	const [display, setDisplay] = useState<boolean>(false);
	const handleMouseMove = () => {
		setDisplay(!display);
	};
	return (
		<Box
			onMouseEnter={handleMouseMove}
			onMouseLeave={handleMouseMove}
			display="flex"
			flexDir="row"
			justifyContent="space-between"
			w="250PX"
			h="44px"
			borderRadius="16px"
			borderTop="2px"
			p="8px 12px"
			borderTopColor={color}
			bg="#FFFFFF"
			boxShadow="lg"
		>
			<Text
				w="84px"
				fontWeight="500"
				align="right"
				lineHeight="28px"
				display="flex"
				flex="row"
				gap="4px"
			>
				{text}
				<Box
					borderRadius="100px"
					p="2px 4px 0px 4px"
					gap="10px"
					bg="#F4F4F4"
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					۰
				</Box>
			</Text>
			<Box
				as="div"
				w="48px"
				h="24px"
				gap="4px"
				display={display ? "block" : "none"}
			>
				<DotsMenu />
				<Tooltip hasArrow label="افزودن تسک" placement="top" ml={1}>
					<Box as="button" w="24px" h="24px">
						<AddIcon w="20px" h="20px" />
					</Box>
				</Tooltip>
			</Box>
		</Box>
	);
};

export default Column;
