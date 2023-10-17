import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Box,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	ModalBody,
} from "@chakra-ui/react";
import { ColorPaletteIcon, DotsIcon } from "../../../icons";
import { AddIcon, LinkIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Share } from "../..";
import ModalItem from "../../NewProjectModal/modalItem";
import NewWorkSpaceContent from "../../NewSpaceModal/NewSpaceForm";
import { AXIOS } from "../../../utils/functions/AXIOS";

type TType = "workspace" | "projectitem";
interface IColumnMoreProp {
	type: TType;
	workSpaseKey: any;
}

const ColumnMore = ({ type, workSpaseKey }: IColumnMoreProp): JSX.Element => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleDeleteWorkspace = () => {
		AXIOS.delete(`/workspaces/${workSpaseKey}/`);
	};
	return (
		<Menu>
			<MenuButton as="button" w="24px" h="24px">
				<DotsIcon w="20px" h="20px" />
			</MenuButton>
			<MenuList>
				<Box mb="sm">
					<MenuItem icon={<AddIcon />} onClick={onOpen}>
						{type === "workspace" ? "ساختن پروژه جدید" : "ساختن تسک جدید"}
					</MenuItem>
					<ModalItem
						isOpen={isOpen}
						onClose={onClose}
						modalItemKey={workSpaseKey}
					/>
					<MenuItem icon={<EditIcon />} onClick={onOpen}>
						{type === "workspace" ? "ویرایش ورک اسپیس" : "ویرایش نام پروژه"}
					</MenuItem>
					<Modal
						onClose={onClose}
						isOpen={isOpen}
						isCentered
						blockScrollOnMount={true}
						size="xl"
					>
						<ModalOverlay />
						<ModalContent borderRadius="8px" p="24px">
							<ModalCloseButton left="unset" right="sm" top="sm" zIndex="2" />
							<ModalBody overflow="hidden">
								<NewWorkSpaceContent type="edit" workSpaseKey={workSpaseKey} />
							</ModalBody>
						</ModalContent>
					</Modal>
					{/* {type === "workspace" && (
						<MenuItem icon={<ColorPaletteIcon w="20px" h="20px" />}>
							ویرایش رنگ
						</MenuItem>
					)} */}
					<MenuItem icon={<LinkIcon />}>کپی لینک</MenuItem>
					{type === "workspace" ? (
						<MenuItem
							icon={<DeleteIcon />}
							color="#E53E3E"
							onClick={handleDeleteWorkspace}
						>
							حذف
						</MenuItem>
					) : (
						<MenuItem icon={<DeleteIcon />} color="#E53E3E">
							حذف
						</MenuItem>
					)}
				</Box>
				<Share type="space" />
			</MenuList>
		</Menu>
	);
};

export default ColumnMore;
