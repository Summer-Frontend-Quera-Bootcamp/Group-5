import {
	Box,
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { CloseIcon, DotsIcon, EditIcon } from "../../../../../../icons";
import ColorPicker from "./ColorPicker";

const BookmarkSetting: FC = () => {
	return (
		<Menu>
			<MenuButton as={Button} variant="unstyled">
				<DotsIcon w="20px" h="20px" />
			</MenuButton>
			<MenuList>
				<MenuItem>
					<CloseIcon w="14px" h="14px" />
					<Text ms="xs">حذف</Text>
				</MenuItem>
				<MenuItem>
					<EditIcon w="14px" h="14px" />
					<Text ms="xs">ویرایش تگ</Text>
				</MenuItem>
				<Box>
					<ColorPicker />
				</Box>
			</MenuList>
		</Menu>
	);
};

export default BookmarkSetting;
