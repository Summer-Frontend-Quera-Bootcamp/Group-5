import { Box } from "@chakra-ui/react";
import NewBoardModal from "./NewBoardModal";

const Board = (): JSX.Element => {
	return (
		<>
			<Box w="max-content">
				<NewBoardModal />
			</Box>
		</>
	);
};

export default Board;
