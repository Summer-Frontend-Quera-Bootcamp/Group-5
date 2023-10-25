import {
	Button,
	HStack,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverTrigger,
	RadioGroup,
	Text,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { ColorPaletteIcon } from "../../../../../../../icons";
import ColorInput from "../../../../../../ColorInput";

const ColorPicker: FC<{}> = () => {
	const [tagColor, setTagColor] = useState<TColorSchemes>("red");
	const colors: TColorSchemes[] = [
		"red",
		"orange",
		"yellow",
		"green",
		"teal",
		"blue",
		"cyan",
		"purple",
		"pink",
	];
	return (
		<Popover placement="left">
			<PopoverTrigger>
				<Button
					variant="ghost"
					justifyContent="start"
					fontWeight="normal"
					w="full"
					borderRadius="0"
					gap="xs"
					p="0.25rem 0.75rem"
				>
					<ColorPaletteIcon w="14px" h="14px" />
					<Text>ویرایش رنگ</Text>
				</Button>
			</PopoverTrigger>
			<PopoverContent py="md" w="200px">
				<PopoverArrow />
				<PopoverCloseButton />
				<PopoverBody>
					<RadioGroup>
						<HStack wrap="wrap" columnGap="sm" rowGap="sm">
							{colors.map((c) => (
								<ColorInput
									key={c}
									color={c}
									selectedColor={tagColor}
									setSelectedColor={setTagColor}
								/>
							))}
						</HStack>
					</RadioGroup>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};

export default ColorPicker;
