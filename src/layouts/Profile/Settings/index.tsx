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
import { FC, useState } from "react";
import ColorInput from "../../../components/ColorInput";

// get from global state
const initialColor = "red-primary";

const Settings: FC = () => {
	const [selectedColor, setSelectedColor] = useState<TColors>(initialColor);
	const colors: TColors[] = [
		"red-primary",
		"pink-primary",
		"grape-primary",
		"violet-primary",
		"indigo-primary",
		"blue-primary",
		"cyan-primary",
		"teal-primary",
		"brand-primary",
		"green-primary",
		"lime-primary",
		"yellow-primary",
		"orange-primary",
	];
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
				<Button colorScheme="teal" w="350px" mt="lg">
					ثبت تغییرات
				</Button>
			</chakra.form>
		</VStack>
	);
};

export default Settings;
