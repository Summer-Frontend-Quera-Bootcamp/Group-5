import {
	Button,
	FormControl,
	FormLabel,
	HStack,
	Heading,
	RadioGroup,
	VStack,
	chakra,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import ColorInput from "../../../components/ColorInput";
import { setAccent } from "../../../features/themeSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import DarkModeSwitch from "../../../components/DarkModeSwitch";

const Settings: FC = () => {
	const { accent } = useAppSelector((state) => state.theme);
	const [selectedColor, setSelectedColor] = useState<TColorSchemes>(accent);
	const dispatch = useAppDispatch();
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

	useEffect(() => {
		dispatch(setAccent(selectedColor));
	}, [selectedColor]);

	return (
		<VStack align="start">
			<Heading fontSize="31px" mb="lg">
				تنظیمات
			</Heading>
			<chakra.form display="flex" flexDir="column" gap="sm">
				<FormControl as="fieldset">
					<FormLabel as="legend" fontSize="14px">
						انتخاب تم
					</FormLabel>
					<RadioGroup name="theme-color" defaultValue="red">
						<HStack spacing="sm">
							{colors.map((c) => (
								<ColorInput
									color={c}
									selectedColor={selectedColor}
									setSelectedColor={setSelectedColor}
								/>
							))}
						</HStack>
					</RadioGroup>
				</FormControl>
				<DarkModeSwitch />
			</chakra.form>
		</VStack>
	);
};

export default Settings;
