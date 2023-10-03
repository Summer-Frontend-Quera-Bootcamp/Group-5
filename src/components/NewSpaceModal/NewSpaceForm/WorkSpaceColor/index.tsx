import {
	Avatar,
	Box,
	Button,
	FormControl,
	FormLabel,
	HStack,
	Heading,
	RadioGroup,
	VStack,
} from "@chakra-ui/react";
import { FC, FormEvent } from "react";
import { ArrowIcon, DisableIcon } from "../../../../icons";
import ColorInput from "../../../ColorInput";
import { chakra } from "@chakra-ui/react";

const WorkSpaceColor: FC<IWorkSpaceColorProps> = ({
	workspaceName,
	workspaceColor,
	setWorkspaceColor,
	setModalPage,
}) => {
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
	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		if (workspaceName.trim().length === 0) return;
		setModalPage("workspaceDetails");
	}

	return (
		<chakra.form
			onSubmit={handleSubmit}
			display="flex"
			flexDir="column"
			gap="xl"
			pos="relative"
		>
			<Button
				type="button"
				variant="unstyled"
				p="0"
				w="24px"
				h="24px"
				pos="absolute"
				top="-10px"
				left="-30px"
				onClick={() => setModalPage("workspaceName")}
			>
				<ArrowIcon w="24px" h="24px" />
			</Button>
			<Heading textAlign="center" fontWeight="800" fontSize="24px">
				انتخاب رنگ ورک‌اسپیس
			</Heading>
			<Box>
				<FormControl as="fieldset" display="flex" gap="sm">
					<Avatar
						name={workspaceName}
						color="white"
						size="xl"
						borderRadius="8px"
						bg={workspaceColor}
					/>
					<VStack align="start" gap="0">
						<FormLabel as="legend" fontSize="14px">
							رنگ ورک‌اسپیس
						</FormLabel>
						<RadioGroup name="theme-color" defaultValue="red">
							<HStack wrap="wrap" columnGap="sm" rowGap="0">
								<Button
									variant="unstyled"
									minW="20px"
									p="0"
									onClick={() => setWorkspaceColor("gray-primary")}
								>
									<DisableIcon w="20px" h="20px" />
								</Button>
								{colors.map((c) => (
									<ColorInput
										key={c}
										color={c}
										selectedColor={workspaceColor}
										setSelectedColor={setWorkspaceColor}
									/>
								))}
							</HStack>
						</RadioGroup>
					</VStack>
				</FormControl>
			</Box>
			<Button type="submit" colorScheme="teal">
				ادامه
			</Button>
		</chakra.form>
	);
};

export default WorkSpaceColor;
