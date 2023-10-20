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
	useDisclosure,
} from "@chakra-ui/react";
import fa from "@fullcalendar/core/locales/fa";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import moment from "moment-jalaali";
import { FC, useEffect, useRef, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../../hooks";
import { FlagIcon } from "../../icons";
import "./style.css";

interface ICalendarProps {
	workspaceId: number;
	projectId: number;
	boardId?: number;
}

const Calendar: FC<ICalendarProps> = ({ workspaceId, projectId, boardId }) => {
	const { accent, highlight } = useAppSelector((state) => state.theme);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [dateInfo, setDateInfo] = useState<string>("2000-01-01");
	const [inputValue, setInputValue] = useState("");
	const { handleSubmit } = useForm();
	// const [tasks, setTasks] = useState();
	// /workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks/
	// useEffect(() => {
	// 	AXIOS.get("");
	// });

	const events = [
		{
			title: "تسک دوم",
			start: "2023-10-20",
			end: "2023-10-20",
		},
		{
			title: "تسک سوم",
			start: "2023-10-22",
			end: "2023-10-22",
		},
		{
			title: "تسک اول",
			start: "2023-10-16",
			end: "2023-10-16",
		},
	];

	useEffect(() => {
		moment.loadPersian();
	}, []);

	const formRef = useRef<HTMLFormElement | null>(null);

	const onSubmit: SubmitHandler<FieldValues> = () => {
		if (formRef.current) {
			formRef.current.reset();
			setInputValue("");
		}
		onClose();
	};

	return (
		<>
			<FullCalendar
				plugins={[dayGridPlugin, interactionPlugin]}
				fixedWeekCount={false}
				showNonCurrentDates={true}
				aspectRatio={window.innerWidth / window.innerHeight}
				locale={fa}
				timeZone="Asia/Tehran"
				initialView="dayGridMonth"
				events={events}
				dateClick={(info) => {
					onOpen();
					setDateInfo(info.dateStr);
				}}
			/>
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
		</>
	);
};

export default Calendar;
