import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { DotsIcon } from "../../../icons";
import { DownloadIcon, DeleteIcon } from "@chakra-ui/icons";
import { AXIOS } from "../../../utils/functions/AXIOS";
import { useParams } from "react-router-dom";
import NewTaskModal from "../../NewTaskModal";
import EditColumnModal from "./editColumnModal";

interface IDotsMenuProp {
	boardId: number;
}
const DotsMenu = ({ boardId }: IDotsMenuProp): JSX.Element => {
	const { workspaceId, projectId } = useParams();
	const handleDelete = () => {
		AXIOS.delete(
			`/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/`
		);
	};
	return (
		<Menu>
			<MenuButton as="button" w="24px" h="24px">
				<DotsIcon w="20px" h="20px" />
			</MenuButton>
			<MenuList>
				<EditColumnModal boardId={boardId} />
				<NewTaskModal place="columnDots" project="amin" />
				<MenuItem icon={<DownloadIcon />}>آرشیو تمام تسک ها</MenuItem>
				<MenuItem icon={<DeleteIcon />} color="#E53E3E" onClick={handleDelete}>
					حذف ستون
				</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default DotsMenu;
