import { Box, Text, Tooltip } from "@chakra-ui/react";
import { AddIcon } from "../../icons";
import { useState } from "react";
import DotsMenu from "./DotsMenu";
import { Task } from "..";
import NewTaskModal from "../NewTaskModal";

interface IColumnProps {
	text: string;
	color: string;
}

const Column = ({ text, color }: IColumnProps): JSX.Element => {
	const [display, setDisplay] = useState<boolean>(false);
	const [flag, setFlag] = useState<boolean>(false);
	const [array, setArray] = useState<JSX.Element[]>([]);

	// const handleAddIcon = () => {
	// 	setFlag(true);
	// 	setArray((old) => [
	// 		...old,
	// 		<Task projectName="پروژه اول" userName="amir menshad" />,
	// 	]);
	// };

	const handleMouseEnter = () => {
		setDisplay(true);
	};
	const handleMouseLeave = () => {
		setDisplay(false);
	};

	return (
		<Box display="flex" flexDir="column" h="max-content">
			<Box
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				display="flex"
				flexDir="row"
				justifyContent="space-between"
				w="250PX"
				h="44px"
				borderRadius="16px"
				borderTop="2px"
				p="8px 12px"
				borderTopColor={color}
				bg="whiteAlpha.100"
				boxShadow="lg"
			>
				<Text
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
						color="blackAlpha.900"
					>
						۰
					</Box>
				</Text>
				<Box w="48px" h="24px" gap="4px" display={display ? "flex" : "none"}>
					<DotsMenu />
					<Tooltip hasArrow label="افزودن تسک" placement="top" ml={1}>
						<NewTaskModal place="board" project="پروژه اول" />
					</Tooltip>
				</Box>
			</Box>
			{flag && array.map((x) => x)}
		</Box>
	);
};

export default Column;
