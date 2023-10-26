import {
	Button,
	FormControl,
	HStack,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
	Text,
	chakra,
} from "@chakra-ui/react";
import { FlagIcon } from "../../../icons";
import { useAppSelector } from "../../../hooks";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FC, useEffect, useRef, useState } from "react";
import moment from "moment-jalaali";

interface INewTask {
	isOpen: boolean;
	onClose: () => void;
	dateInfo: string;
}

const NewTask: FC<INewTask> = ({ isOpen, onClose, dateInfo }) => {
	const { accent, highlight } = useAppSelector((state) => state.theme);
	const [inputValue, setInputValue] = useState("");
	const { handleSubmit } = useForm();
	const formRef = useRef<HTMLFormElement | null>(null);

	const onSubmit: SubmitHandler<FieldValues> = () => {
		if (formRef.current) {
			formRef.current.reset();
			setInputValue("");
		}
		onClose();
	};

	useEffect(() => {
		moment.loadPersian();
	}, []);

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="sm">
			<ModalOverlay />
			<ModalContent>
				<ModalBody>
					<chakra.form
						display="flex"
						flexDir="column"
						gap="sm"
						py="sm"
						onSubmit={handleSubmit(onSubmit)}
						ref={formRef}
					>
						<FormControl>
							<Input
								variant="unstyled"
								placeholder="نام تسک را وارد کنید"
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
							/>
						</FormControl>
						<HStack justify="space-between">
							<HStack>
								<FlagIcon w="24px" h="24px" color="gray.400" />
								<Text color={highlight}>
									{moment(dateInfo, "YYYY/MM/DD").format("jDD")}
								</Text>
								<Text color={highlight}>
									{moment(dateInfo, "YYYY/MM/DD").format("jMMMM")}
								</Text>
							</HStack>
							<Button type="submit" colorScheme={accent} size="md">
								ساختن تسک
							</Button>
						</HStack>
					</chakra.form>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default NewTask;
