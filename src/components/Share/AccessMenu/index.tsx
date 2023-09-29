import { ChevronDownIcon } from "@chakra-ui/icons";
import {
	Button,
	Divider,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from "@chakra-ui/react";
import { FC, useState } from "react";

const AccessMenu: FC = () => {
	const [selectedItem, setSelectedItem] = useState("دسترسی کامل");

	const accessItemsData = [
		{
			title: "دسترسی کامل",
			description:
				"توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه",
		},
		{
			title: "دسترسی ویرایش",
			description:
				"توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی‌تواند پروژه را حذف یا تسک جدید بسازد.",
		},
		{
			title: "دسترسی کامنت",
			description:
				"توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر دهد اما توانایی ویرایش تنظیمات پروژه را ندارد.",
		},
		{
			title: "فقط دسترسی مشاهده",
			description: "توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد.",
		},
	];

	const accessItems = accessItemsData.map((item, idx, arr) => (
		<>
			<MenuItem
				onClick={() => setSelectedItem(item.title)}
				flexDir="column"
				alignItems="start"
				fontSize="12px"
				p="16px"
			>
				<Text fontWeight="800" mb="xs">
					{item.title}
				</Text>
				<Text fontWeight="normal">{item.description}</Text>
			</MenuItem>
			{idx !== arr.length - 1 ? <Divider /> : null}
		</>
	));

	return (
		<Menu>
			<MenuButton
				as={Button}
				rightIcon={<ChevronDownIcon />}
				variant="outline"
				fontSize="12px"
				fontWeight="400"
				ms="auto"
			>
				{selectedItem}
			</MenuButton>
			<MenuList w="200px" display="flex" flexDir="column">
				{accessItems}
			</MenuList>
		</Menu>
	);
};

export default AccessMenu;
