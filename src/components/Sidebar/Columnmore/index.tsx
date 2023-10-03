import { Menu, MenuButton, MenuList, MenuItem, Box } from "@chakra-ui/react";
import { ColorPaletteIcon, DotsIcon } from "../../../icons";
import { AddIcon, LinkIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Share } from "../..";

type TType = "workspace" | "projectitem";
interface IColumnMoreProp {
	type: TType;
}

const ColumnMore = ({ type }: IColumnMoreProp): JSX.Element => {
	return (
		<Menu>
			<MenuButton as="button" w="24px" h="24px">
				<DotsIcon w="20px" h="20px" />
			</MenuButton>
			<MenuList>
				<Box mb="sm">
					<MenuItem icon={<AddIcon />}>
						{type === "workspace" ? "ساختن پروژه جدید" : "ساختن تسک جدید"}
					</MenuItem>
					<MenuItem icon={<EditIcon />}>
						{type === "workspace" ? "ویرایش نام تسک" : "ویرایش نام پروژه"}
					</MenuItem>
					{type === "workspace" && (
						<MenuItem icon={<ColorPaletteIcon w="20px" h="20px" />}>
							ویرایش رنگ
						</MenuItem>
					)}
					<MenuItem icon={<LinkIcon />}>کپی لینک</MenuItem>
					<MenuItem icon={<DeleteIcon />} color="#E53E3E">
						حذف
					</MenuItem>
				</Box>
				<Share type="space" />
			</MenuList>
		</Menu>
	);
};

export default ColumnMore;
