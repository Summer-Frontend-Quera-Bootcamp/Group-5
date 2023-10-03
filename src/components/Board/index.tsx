import { Box } from "@chakra-ui/react";
import NewBoardModal from "./NewBoardModal";
import { Task } from "..";

const Board = (): JSX.Element => {
    return (
        <>
            <Box w='max-content'>
                <NewBoardModal />
                <Task projectName="پروژه اول" userName="amir menshad"/>
            </Box>
        </>
    );
}

export default Board;