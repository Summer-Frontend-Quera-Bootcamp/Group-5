import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FC } from "react";
import { ChevronIcon } from "../../../icons";
import { setCondition } from "../../../features/filterSlice";
import { useAppDispatch } from "../../../hooks";

const ConditionMenu: FC<IConditionMenuProps> = ({ idx, selectedItem }) => {
	const dispatch = useAppDispatch();
	return (
		<Menu>
			<MenuButton
				as={Button}
				variant="outline"
				rightIcon={<ChevronIcon w="18px" h="18px" transform="rotate(90deg)" />}
				w="100px"
				fontSize="14px"
				fontWeight="normal"
				color="gray.500"
			>
				{selectedItem}
			</MenuButton>
			<MenuList pt="0">
				<MenuItem
					onClick={() => {
						dispatch(setCondition({ idx, option: "است" }));
					}}
				>
					است
				</MenuItem>
				<MenuItem
					onClick={() => {
						dispatch(setCondition({ idx, option: "نیست" }));
					}}
				>
					نیست
				</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default ConditionMenu;
