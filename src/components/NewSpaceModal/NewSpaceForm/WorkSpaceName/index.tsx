import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
} from "@chakra-ui/react";
import { FC, FormEvent } from "react";
import { chakra } from "@chakra-ui/react";

const WorkSpaceNameForm: FC<IWorkSpaceNameProps> = ({
	workspaceName,
	setWorkspaceName,
	setModalPage,
}) => {
	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		if (workspaceName.trim().length === 0) return;
		setModalPage("workspaceColor");
	}

	return (
		<chakra.form
			onSubmit={handleSubmit}
			display="flex"
			flexDir="column"
			gap="xl"
		>
			<Heading textAlign="center" fontWeight="800" fontSize="24px">
				ساختن ورک‌اسپیس جدید
			</Heading>
			<FormControl>
				<FormLabel>نام ورک‌اسپیس</FormLabel>
				<Input
					type="text"
					name="workspace-name"
					value={workspaceName}
					onChange={(e) => setWorkspaceName(e.target.value)}
				/>
			</FormControl>
			<Button type="submit" colorScheme="teal">
				ادامه
			</Button>
		</chakra.form>
	);
};

export default WorkSpaceNameForm;
