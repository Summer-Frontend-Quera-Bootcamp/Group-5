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
	workSpaseKey?: any;
	projectKey?: any;
}

const ColumnMore = ({
	type,
	workSpaseKey,
	projectKey,
}: IColumnMoreProp): JSX.Element => {
	const {
		isOpen: isFirstModalOpen,
		onOpen: onFirstModalOpen,
		onClose: onFirstModalClose,
	} = useDisclosure();
	const {
		isOpen: isSecondModalOpen,
		onOpen: onSecondModalOpen,
		onClose: onSecondModalClose,
	} = useDisclosure();

	const handleDeleteWorkspace = () => {
		AXIOS.delete(`/workspaces/${workSpaseKey}/`);
	};
	const handleDeletePoroject = () => {
		AXIOS.delete(`/workspaces/${workSpaseKey}/projects/${projectKey}/`)
			.then((res) => console.log(res))
			.catch((err) => console.log(err.response.status));
	};
	return (
		<Menu>
			<MenuButton as="button" w="24px" h="24px">
				<DotsIcon w="20px" h="20px" />
			</MenuButton>
			<MenuList>
				<Box mb="sm">
					<Box>
						<MenuItem icon={<AddIcon />} onClick={onFirstModalOpen}>
							{type === "workspace" ? "ساختن پروژه جدید" : "ساختن تسک جدید"}
						</MenuItem>
						<ModalItem
							isOpen={isFirstModalOpen}
							onClose={onFirstModalClose}
							workSpacekey={workSpaseKey}
						/>
					</Box>
					<Box>
						<MenuItem icon={<EditIcon />} onClick={onSecondModalOpen}>
							{type === "workspace" ? "ویرایش ورک اسپیس" : "ویرایش نام پروژه"}
						</MenuItem>
						{type === "workspace" ? (
							<Modal
								onClose={onSecondModalClose}
								isOpen={isSecondModalOpen}
								isCentered
								blockScrollOnMount={true}
								size="xl"
							>
								<ModalOverlay />
								<ModalContent borderRadius="8px" p="24px">
									<ModalCloseButton
										left="unset"
										right="sm"
										top="sm"
										zIndex="2"
									/>
									<ModalBody overflow="hidden">
										<NewWorkSpaceContent
											type="edit"
											workSpaseKey={workSpaseKey}
										/>
									</ModalBody>
								</ModalContent>
							</Modal>
						) : (
							<ModalItem
								isOpen={isSecondModalOpen}
								onClose={onSecondModalClose}
								workSpacekey={workSpaseKey}
								porojectItemkey={projectKey}
								type="edit"
							/>
						)}
					</Box>
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
						<MenuItem
							icon={<DeleteIcon />}
							color="#E53E3E"
							onClick={handleDeletePoroject}
						>
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
